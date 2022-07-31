# Everything Web Scraping
Learn everything web scraping by [David Teather](https://twitter.com/david_teather) find the video series on [YouTube](https://youtube.com/playlist?list=PLmRtxHvzkEE8Ofiy4hnnXSoxw7gs4HOHt).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/davidteather/) [![Sponsor Me](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub)](https://github.com/sponsors/davidteather) [![Discord Server](https://img.shields.io/discord/783108952111579166.svg?color=7289da&logo=discord&style=flat-square)](https://discord.gg/yyPhbfma6f) ![](https://visitor-badge.laobi.icu/badge?page_id=davidteather.web-scraping-by-reverse-engineering) [![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fdavid_teather)](https://twitter.com/david_teather)

## Table Of Contents
1. [Course Catalogue](#course-catalogue)
2. [How To start The Mock Websites](#how-to-start-the-mock-websites)

## Welcome!

Glad you're here! If it's your first time check out the the [introduction](./000-introduction/README.md), if not welcome back!

Consider [sponsoring me](https://github.com/sponsors/davidteather) on GitHub to make work like this possible

## Course Catalogue
0. [Introduction To The Course](/000-introduction/)
1. [Introduction To Forging API Requests](/001-introduction-to-forging-api-requests/)


## How To Start The Mock Websites

Run `docker-compose up` while in a lesson directory, when it says development server started open `localhost:3000` in your browser to check that it's working properly.

When done with this lesson you can `control + c` to shut down your docker containers.

### Cleaning Up
#### With Docker Desktop

1. Navigate to the containers tab on the side, find the lesson you want to delete and click the trashcan icon to remove it.
2. Navigate to the images tab on the side, find the images starting with the course name to delete and hit the trash can.

#### With Command line

1. To remove containers, `docker rm $(docker ps -a -q --filter name=XXX)`, where XXX is the lesson number you want removed (ex: 001).
2. To remove images, `docker rmi $(docker images --filter label=lesson.number=X -a -q)`, where X is the number you want removed (ex: 1, ex: 10)