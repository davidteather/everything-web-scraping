from faker import Faker
from faker.providers import address, color, geo, person, profile
import time
import json
import random
import requests

fake = Faker()
fake.add_provider(profile)

data = {"profiles": [], "posts": []}

# Profile Generation
profile_colors = [
    "#8ECAE6",
    "#219EBC",
    "#D82F2F",
    "#FB8500",
    "#FFB703",
    "#CBF3F0",
    "#2EC4B6",
    "#FFBF69",
    "#FF9F1C",
    "#DCEDFF",
    "#94B0DA",
    "#419D78",
    "#E0A458",
    "#FFDBB5",
    "#C7F0BD",
    "#9E768F",
    "#9FA4C4",
    "#B47EB3",
    "#92D1C3",
    "#67AAF9",
    "#B95F89",
    "#8884FF",
]
for x in range(50):  # make 50 profiles
    while True:
        p = fake.profile()
        new_profile = {
            "job": p["job"],
            "company": p["company"],
            "username": p["username"],
            "name": p["name"],
            "email": p["mail"],
            "birthday": p["birthdate"].strftime("%m-%d-%Y"),
            "profile_color": random.choice(profile_colors),
        }
        if "'" not in p["job"]:
            break

    data["profiles"].append(new_profile)


# Post Generation
POSTS_TO_CREATE = 500
POSTS_PER_PAGE = 50

photo_options = []
queries = [
    "dancing",
    "technology",
    "programming",
    "birds",
    "dogs",
    "cats",
    "social",
    "vibes",
    "sunset",
    "cars",
    "landscape",
    "mountain",
    "snow",
    "river",
    "stream",
    "reading",
    "bookstore",
    "nighttime",
    "stars",
    "astronomy",
    "coffee",
]
for query in queries:
    r = requests.get(
        f"https://unsplash.com/napi/search?query={query}&per_page={POSTS_PER_PAGE}",
        headers={
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
        },
    )
    d = r.json()
    for photo in d["photos"]["results"]:
        photo_url = photo["urls"]["full"]
        photo_options.append(
            {
                "url": photo_url,
                "unsplash": photo["links"]["html"],
                "likes": photo["likes"],
            }
        )

used_urls = []
for x in range(POSTS_TO_CREATE):
    poster = random.choice(data["profiles"])
    long_text = fake.text()
    while True:
        photo = random.choice(photo_options)
        photo_options.remove(photo)

        if photo["unsplash"] not in used_urls:
            break

    used_urls.append(photo["unsplash"])
    new_post = {
        "image_url": photo["url"],
        "image_unsplash_url": photo["unsplash"],
        "likes_count": photo["likes"],
        "caption": " ".join(long_text.split(" ")[0:200]),
        "author_username": poster["username"],
    }

    data["posts"].append(new_post)


with open("initial_data.json", "w+", encoding="utf-8") as o:
    json.dump(data, o)
