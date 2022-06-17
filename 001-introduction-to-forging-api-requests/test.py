from activity import extract_feed
import json

def test_extract_feed(posts):
    feed = extract_feed()
    for post in posts:
        if post not in feed:
            print(f"extract_feed(): ❌")
            return False

    return True

if __name__ == "__main__":
    with open("website/server/db_seeding/initial_data.json", "r", encoding='utf-8') as init_data:
        data = json.loads(init_data.read())

    profiles = data["profiles"]
    posts = data["posts"]

    passed_extract_feed = extract_feed()

    if passed_extract_feed:
        print(f"All tests: ✅")