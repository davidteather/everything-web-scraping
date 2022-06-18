# Web Scraping With Reverse Engineering
Learn how to web scrape with reverse engineering by [David Teather](https://twitter.com/david_teather){:target="_blank"} find the video series on [YouTube](TODO: Replace with playlist url){:target="_blank"}.

![](https://visitor-badge.laobi.icu/badge?page_id=davidteather.web-scraping-by-reverse-engineering) 

## Table Of Contents
1. [Course Catalogue](#course-catalogue)
2. [How To start The Mock Websites](#how-to-start-the-mock-websites)

## Welcome!

Glad you're here! If it's your first time check out the the [introduction](./000-introduction/README.md), if not welcome back!

## Course Catalogue
0. [Introduction To The Course](/000-introduction/)
1. [Introduction To Forging API Requests](/001-introduction-to-forging-api-requests/)


## How To Start The Mock Websites

If this is your first time here, skip past this

Run `docker-compose up` while in a lesson directory, when it says development server started open `localhost:3000` in your browser to check that it's working properly.

When done with this lesson you can `control + c` to shut down your docker containers.

### Cleaning Up
#### With Docker Desktop

1. Navigate to the containers tab on the side, find the lesson you want to delete and click the trashcan icon to remove it.
2. Navigate to the images tab on the side, find the images starting with the course name to delete and hit the trash can.

#### With Command line

1. To remove containers, `docker rm $(docker ps -a -q --filter name=XXX)`, where XXX is the lesson number you want removed (ex: 001).
2. To remove images, `docker rmi $(docker images --filter label=lesson.number=X -a -q)`, where X is the number you want removed (ex: 1, ex: 10)