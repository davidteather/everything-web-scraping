# Grades submission.py on the test cases
# Don't look inside this if you haven't passed the tests yet

from activity import extract_feed, extract_emails, username_exists
import json

def test_extract_feed(posts):
    images = []
    for post in posts:
        images.append(post["image_url"]) # Image urls are unique

    feed = extract_feed()
    for post in feed:
        if post["image_url"] not in images:
            print(f"extract_feed(): ❌\n\tReturned a post that was not in the database (or returned multiple instances of a single post)")
            return False
        
        images.remove(post["image_url"])

    if len(images) != 0:
        print(f"extract_feed(): ❌\n\tDidn't return all posts in the database")
        return False

    print(f"extract_feed(): ✅")
    return True

def test_extract_emails(profiles):
    emails = []
    for profile in profiles:
        emails.append(profile["email"]) # Image urls are unique

    feed = extract_emails()
    for email in feed:
        if email not in emails:
            print(f"extract_emails(): ❌\n\tReturned an email that was not in the database (or returned multiple instances of a single email)")
            return False
        
        emails.remove(email)

    if len(emails) != 0:
        print(f"extract_emails(): ❌\n\tDidn't return all emails in the database")
        return False

    print(f"extract_emails(): ✅")
    return True

def test_username_exists(profiles):
    fake_usernames = ["orange", "apple", "bruh", "davidteather", "subscribe", "contact.davidteather@gmail.com"]
    for profile in profiles:
        u = profile['username']

        # Ensure fake_usernames actually don't exist
        if u in fake_usernames:
            fake_usernames.remove(u)

        if not username_exists(u):
            print(f"username_exists(): ❌\n\tReturned False for a username that exists")
            return False

    for fake_username in fake_usernames:
        if username_exists(fake_username):
            print(f"username_exists(): ❌\n\tReturned True for a username that doesn't exist")
            return False

    print(f"username_exists(): ✅")
    return True

if __name__ == "__main__":
    with open("website/server/db_seeding/initial_data.json", "r", encoding='utf-8') as init_data:
        data = json.loads(init_data.read())

    profiles = data["profiles"]
    posts = data["posts"]

    passed_extract_feed = test_extract_feed(posts)
    passed_extract_emails = test_extract_emails(profiles)
    passed_username_exists = test_username_exists(profiles)

    if passed_extract_feed and passed_username_exists and passed_extract_emails:
        print(f"All tests: ✅")