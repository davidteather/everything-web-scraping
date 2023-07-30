# Grades submission.py on the test cases
# Don't look inside this if you haven't passed the tests yet

from activities import WEBSITE_BASE_URL, title_and_prices, product_colors, product_materials, highest_reviewed, product_availability, product_reviews
import requests
from bs4 import BeautifulSoup
import pytest

def test_title_and_prices():
    r = requests.get(WEBSITE_BASE_URL)
    soup = BeautifulSoup(r.text, 'html.parser')

    prices = []
    for product in soup.find_all('div', attrs={'class': 'product-details'}):
        children = product.findChildren('p')
        price = children[1].get_text()
        title = product.h4.get_text()
        prices.append(f"{title} ({price})")

    actual = title_and_prices()
    assert prices == actual,  f'Got {actual} but expected {prices}'

def test_product_colors():
    r = requests.get(WEBSITE_BASE_URL)
    soup = BeautifulSoup(r.text, 'html.parser')

    product_parent = soup.find('ul', attrs={'class': 'product-list'})
    result = []
    for product in product_parent.find_all('li'):
        style_picker = product.find('div', attrs={'class': 'style-picker'})
        
        # To get the hex codes we want to look at the style attribute
        # We can use the get method to get the style attribute
        hex_codes = []

        if style_picker is None:
            # The site has some extra <li></li> elements for spacing that aren't products
            continue

        for color in style_picker.find_all('div'):
            style = color.get('style')
            hex_code = style.split(": ")[1]
            hex_codes.append(hex_code)

        product_title = product.h4.get_text()
        result.append(f"{product_title} ({', '.join(hex_codes)})")
    
    actual = product_colors()
    assert result == actual, f"Got {actual} but expected {result}"

def test_product_materials():
    r = requests.get(WEBSITE_BASE_URL)
    soup = BeautifulSoup(r.text, 'html.parser')

    result = []
    product_parent = soup.find('ul', attrs={'class': 'product-list'})
    for product in product_parent.find_all('li'):
        a_tag = product.a

        if a_tag is None:
            # Again, has extra <li></li> for spacing that aren't products
            continue

        product_link = product.a.get('href')    
        product_link = WEBSITE_BASE_URL + product_link

        # We can now use the product_link to get the specific product's page which contains information on
        # the product's material
        product_page = requests.get(product_link)
        product_soup = BeautifulSoup(product_page.text, 'html.parser')

        # The material is in <p> tag with id of "material"
        material = product_soup.find('p', attrs={'id': 'material'}).get_text()

        # Get the product title for printing
        product_title = product.h4.get_text()
        result.append(f"{product_title} made of {material}")

    actual = product_materials()
    assert result == actual, f"Got {actual} but expected {result}"

def test_highest_reviewed():
    r = requests.get(WEBSITE_BASE_URL)
    soup = BeautifulSoup(r.text, 'html.parser')

    product_ratings_list = []
    product_parent = soup.find('ul', attrs={'class': 'product-list'})
    for product in product_parent.find_all('li'):
        a_tag = product.a

        if a_tag is None:
            # Again, has extra <li></li> for spacing that aren't products
            continue

        product_link = product.a.get('href')    
        product_link = WEBSITE_BASE_URL + product_link

        product_page = requests.get(product_link)
        product_soup = BeautifulSoup(product_page.text, 'html.parser')

        # Get the star container
        star_container = product_soup.find('div', attrs={'class': 'star-rating'})

        # A star is marked as a full star if it has the class "checked"
        # We can use this to count the number of full stars
        full_stars_list = star_container.find_all('span', attrs={'class': 'checked'})
        full_stars = len(full_stars_list)

        product_title = product.h4.get_text()

        product_ratings_list.append((product_title, full_stars))  

    # Sort product_ratings_list by the number of stars
    product_ratings_list.sort(key=lambda x: x[1], reverse=True)
    actual = highest_reviewed()
    assert product_ratings_list == actual, f"Got {actual} but expected {product_ratings_list}"

def test_product_availability():
    r = requests.get(WEBSITE_BASE_URL)
    soup = BeautifulSoup(r.text, 'html.parser')

    result = []
    product_parent = soup.find('ul', attrs={'class': 'product-list'})
    for product in product_parent.find_all('li'):
        a_tag = product.a

        if a_tag is None:
            # Again, has extra <li></li> for spacing that aren't products
            continue

        product_link = product.a.get('href')    
        product_link = WEBSITE_BASE_URL + product_link

        product_page = requests.get(product_link)
        product_soup = BeautifulSoup(product_page.text, 'html.parser')

        # Button has <div class="button btn-secondary">
        button = product_soup.find('div', attrs={'class': 'button'})
        button_text = button.get_text()

        is_available = True
        if button_text == "Out of Stock":
            is_available = False

        product_title = product.h4.get_text()

        result.append(f"{product_title} is available: {is_available}")

    actual = product_availability()
    assert result == actual, f"Got {actual} but expected {result}"

def test_product_reviews():
    r = requests.get(WEBSITE_BASE_URL)
    soup = BeautifulSoup(r.text, 'html.parser')

    expected_product_reviews = {}
    product_parent = soup.find('ul', attrs={'class': 'product-list'})
    for product in product_parent.find_all('li'):
        a_tag = product.a

        if a_tag is None:
            # Again, has extra <li></li> for spacing that aren't products
            continue

        product_link = product.a.get('href')    
        product_link = WEBSITE_BASE_URL + product_link

        product_page = requests.get(product_link)
        product_soup = BeautifulSoup(product_page.text, 'html.parser')

        reviews_main = product_soup.find('div', attrs={'class': 'product-ratings'})
        reviews = reviews_main.find_all('div', attrs={'class': 'product-rating'})

        product_title = product.h4.get_text()

        for review in reviews:
            r = review.find_all('span', attrs={'class': 'checked'})

            review_rating = review.find('span', attrs={'class': 'rating-number'}).get_text()
            review_title = review.find('div', attrs={'class': 'rating-title'}).get_text()
            review_full = review.find('div', attrs={'class': 'rating-review'}).get_text()

            review = {
                'rating': review_rating,
                'review_title': review_title,
                'review_full': review_full
            }

            if product_title in expected_product_reviews:
                expected_product_reviews[product_title].append(review)
            else:
                expected_product_reviews[product_title] = [review]

    actual = product_reviews()   
    assert expected_product_reviews == actual, f"Got {actual} but expected {expected_product_reviews}"

if __name__ == "__main__":
    pytest.main([__file__])