# Grades submission.py on the test cases
# Don't look inside this if you haven't passed the tests yet

from activity import extract_feed
import json

def test_extract_feed(posts):
    images = []
    for post in posts:
        images.append(post["image_url"]) # Image urls are unique

    feed = extract_feed()
    for post in feed:
        if post["image_url"] not in images:
            print(post)
            print(f"extract_feed(): ❌\n\tReturned a post that was not in the database (or returned multiple instances of a single post)")
            return False
        
        images.remove(post["image_url"])

    if len(images) != 0:
        print(f"extract_feed(): ❌\n\tDidn't return all posts in the database")
        return False

    return True

if __name__ == "__main__":
    with open("website/server/db_seeding/initial_data.json", "r", encoding='utf-8') as init_data:
        data = json.loads(init_data.read())

    profiles = data["profiles"]
    posts = data["posts"]

    passed_extract_feed = test_extract_feed(posts)

    if passed_extract_feed:
        print(f"All tests: ✅")