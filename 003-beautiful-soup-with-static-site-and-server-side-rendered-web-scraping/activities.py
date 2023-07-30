import requests

# Note: the tester relies on this variable, update it if you are running the server on a different port
WEBSITE_BASE_URL = "http://localhost:3000"

# Activity 1: Product Titles & Prices
# Return a list of the product titles and prices
#  Ex: ["Sacha the Deer ($3.13)", ...]
def title_and_prices():
    return ["Sacha the Deer ($3.13)"]

# Activity 2: Get All Colors Available For Each Product
# Return each product's title and color options as a list of strings
#  Ex: ["Sacha the Deer (#000000, #39589e, #9c5145, #dfd3c2)", ...]
def product_colors():
    return ["Sacha the Deer (#000000, #39589e, #9c5145, #dfd3c2)"]

# Activity 3: Get All Product's Material
# Return each product's title and material as a list of strings
#  Ex: ["Bumble the Elephant made of 70% Cotton, 30% Nylon", ...]
def product_materials():
    return ["Bumble the Elephant made of 70% Cotton, 30% Nylon"]

# Activity 4: Filter all the products from highest reviewed to lowest reviewed
# Return a list of the product titles and average rating as a touple
#   Ex: [('Scar the Lion', 5), ...]
def highest_reviewed():
    return [("Scar the Lion", 5), ("Sacha the Deer", 5)]

# Activity 5: Product Availability
# Not all products are available, look at `Gerald the Giraffe`
# Return a list of strings of all products and their availability
#  Ex: ["Sacha the Deer is available: True", ...]
def product_availability():
    return ["Sacha the Deer is available: True"]

# Activity 6: Scrape Reviews For Each Product
# Return a dictionary with structure {"product_title": [{"rating": "5", "review_title": "Great!", "review_full": "I love it"}, ...], ...}
# Ex: {"Sacha the Deer": [{'rating': '5', 'review_title': 'V neck', 'review_full': 'Great shirt. love the detail in back. feminine and different than the average t'}, ...]}
def product_reviews():
    return {"Sacha the Deer": [{'rating': '5', 'review_title': 'V neck', 'review_full': 'Great shirt. love the detail in back. feminine and different than the average t'}]}

if __name__ == "__main__":
    # Optional: You can call your methods here if you want to test them without running the tester
    # print(title_and_prices())
    pass