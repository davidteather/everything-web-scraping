# Lesson 1 - Introduction To Forging API Requests

This lesson is designed to teach you how data is sent between websites and servers and how we can exploit this to extract data.

## Learning Objectives
* Learners will understand how data is sent between a client and a server.
* Learners will forge API requests to a mock website.


## Table of Contents


## Video For The Lesson
[VIDEOLINK & THUMBNAIL](TODO:)

### Video Corrections
None so far

## How Do Websites Get Data?

Watch this section on [YouTube](TODO:) and/or pull up the [slides](TODO:)

### Popular Ways Websites Get Data
* Server Side Rendering (SSR)
    * Data is sent as part of the HTML response to the requester
    * Each request for new data usually requires a page reload
* AJAX
    * Takes a client (ex: web browser) and server approach
    * When the client needs new data it requests it from the server
    * This allows the client to update the data on the page without refreshing the page itself
        * Leads to a more fluid and responsive user experience

Visualizations of how the data flows available in the [video](TODO:) and [slides](TODO:)

### How Do We Exploit This?

If we're able to emulate the requests that a legitimate client makes then we can extract data from the server without ever interacting with the client itself. This technique is generally referred to as **forging requests**.

* Advantages
    * These APIs can be easier to scrape at scale than trying to do it through a client
    * They may contain extra information you can't see in the HTML itself
        * Similar to Missouri accidentally exposing their teachers SSNs [The Verge](https://www.theverge.com/2021/10/14/22726866/missouri-governor-department-elementary-secondary-education-ssn-vulnerability-disclosure){:target="_blank"}
    * Less data returned means quicker requests (and less data transfer fees)
        * Excess HTML, CSS, etc isn't usually returned from the server, just pure data
* Disadvantages
    * Some websites frequently update their APIs
        * Extra work has to be done to keep up with these changes compared to just scraping HTML
        * Might change endpoints, the schema of the data returned, etc
    * Can be hard to emulate human behavior to avoid captchas and other blocking mechanisms
    * Can be difficult to figure out how the website is generating user sessions and other security parameters to prevent web scraping

## Activity

In this activity you'll be looking at a mock website and writing a python script to extract data from it. To get started you should run `docker-compose up` in this directory. If you don't know what docker is or are new to it check out the [docker section of the readme](../README.md#how-to-start-the-mock-websites)


### Brief Description

Our goal is to extract as much data as possible from the website by looking at the network inspector tab of the browser when visiting the mock website. We want to make the same requests that the website (client) makes to the server.

Open `activity.py`, you will be modifying the existing function to do what the comments tell you to do. I recommend using the [requests](https://requests.readthedocs.io/en/latest/user/quickstart/){:target="_blank"} package, although feel free to use whatever you want.

**Do not** change the method names, however feel free to call those methods if you want to test them out in the `if __name__ == "__main__"` section.

### Testing

To check if your implementation is correct run `python test.py` this will import the functions you made. It will tell you what tests failed if any, and will show a success message if all tests passed.

### Solutions

You can find the solutions in the [Video](TODO:), timestamps below
* [extract_feed()](TODO:)
* [user_exists()][TODO:]