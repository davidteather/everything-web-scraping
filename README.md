# Web Scraping With Reverse Engineering
Learn how to web scrape with reverse engineering by [David Teather](https://twitter.com/david_teather){:target="_blank"} find the video series on [YouTube](TODO: Replace with playlist url){:target="_blank"}.

![](https://visitor-badge.laobi.icu/badge?page_id=davidteather.web-scraping-by-reverse-engineering) 

## Table Of Contents
1. [Welcome!](#welcome)
    1. [What I'm Known For](#what-im-known-for)
    2. [Learning Objectives](#learning-objectives)
    3. [How You Will Learn](#how-you-will-learn)
    4. [How To Learn Effectively](#how-to-learn-effectively)
    5. [Course Topics](#course-topics)
2. [Lesson Catalogue](#lesson-catalogue)
3. [Getting Started](#getting-started)
    1. [Prerequisites](#prerequisites)
    2. [Tools Required](#tools-required)
## Welcome!

Glad you're here!

I'm David Teather and I work as a software developer and my specialty is data extraction.

If you'd like a more visual experience check out the introduction video on [YouTube](TODO:), or pull up the introduction powerpoint file TODO:.

### What I'm Known For
* [My research](https://theresponsetimes.com/yikyak-is-exposing-user-locations/){:target="_blank"} on YikYak (a social media app) that was featured in [Vice](https://www.vice.com/en/article/7kbnna/anonymous-social-media-app-yik-yak-exposed-users-precise-locations){:target="_blank"} and [The Verge](https://www.theverge.com/2022/5/13/23070696/yik-yak-anonymous-app-precise-locations-revealed){:target="_blank"}
* Creating various data extraction tools
    * My most popular is [TikTokApi](https://github.com/davidteather/TikTok-Api){:target="_blank"}
        * 600K+ Downloads
        * 2.3K+ Stars

### Learning Objectives
* Learners will understand the many different ways websites prevent web scraping
* Learners will be able to reverse engineer a real-world website for data extraction

### How You Will Learn
* Real website examples
    * Although these websites might change over time and the lesson becomes broken 
* Websites I've created for this course
    * Will not change to ensure that these lessons don't break
* Each lesson will have a hands on activity
    * In addition most modules will have a `submission.py` file that you can create functions related to the lesson concept and run it against a test suite
    * These will primarily focused on extracting data from the websites created for this course

### How To Learn Effectively
* Everybody learns different so these are guidelines
* Take notes from the slides presented in the [videos](TODO){:target="_blank"} 
    * These will revolve around general concepts
    * Will be accompanied by programs to write
* Try the activities before watching the solution in the video
    * Treat the website folder as a black box, like you would a real website, you can figure out everything through the website itself

### Course Topics
* Forging API requests
* Proxies
* Captchas
* Storing data at scale
* Emulating human behavior
* And more 
    * Feel free to [tweet at me](https://twitter.com/david_teather){:target="_blank"} or file an issue with the `lesson-request` label with what you'd like to see

## Lesson Catalogue
1. [Introduction To Forging API Requests](/001-introduction-to-forging-api-requests/)

## Getting Started

Learn how to get started learning with this course!
### Prerequisites
* A basic understanding of programming
* Recommended
    * Some python experience
        * We probably won't do much complex python

### Tools Required
* [Docker](https://www.docker.com/){:target="_blank"}
    * And docker-compose (should be bundled)
* [Python](https://www.python.org/){:target="_blank"}
    * I'll be using 3.10
* A web browser
    * I'll be using [Brave](https://brave.com/){:target="_blank"} (chromium based)
    * Doesn't really matter which as long as you can view network traffic
* And the files in this git repo, so be sure to download it! (and maybe give it a star 😉)