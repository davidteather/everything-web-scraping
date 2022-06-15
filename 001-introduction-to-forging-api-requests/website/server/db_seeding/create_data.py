from faker import Faker
from faker.providers import address, color, geo, person, profile
import time
fake = Faker()
fake.add_provider(profile)

profiles = ""
for x in range(50): # make 50 profiles
    p = fake.profile()
    new_profile = f"""{{
        "job": "{p['job']}",
        "company": "{p['company']}",
        "username": "{p['username']}",
        "name": "{p['name']}",
        "email": "{p['mail']}",
        "birthday": "{p['birthdate']}"
    }},
    """

    profiles += new_profile

response_text = f"""{{
    "profiles": [
        {profiles}
    ]
}}"""

with open("initial_data.json", "w+") as o:
    o.write(response_text)