---
title: Cookie Scraping Project
date: "2021-05-07T22:12:03.284Z"
description: PLACEHOLDER 
published: false 
type: "blog"
---

- ### Intro
    Cookies are no stanger to web development. In this project I put together a small google sheet workflow to track the weekly cookie flavors from Crumbl.com Tracking is important but these have a very real, and delicious payoff, inspiration for Lisa's (baking.)[www.qcccookies.com] 

### Crumbl Cookies 

Screenshot of website. 

Crumbl Cookies is a popular bakery chain with over 300 locations nationwide. While I have never been to any, their weekly cookie flavors have served as an inspiration for my girlfriend in her baking. 

She would frequently visit their site to see what cookies they were offering. The goal of this project was to scrape this information and save it in a spreadsheet for her. That way she wouldnt have to worry about missing a week and would be able to look back on previous cookies without having to take screenshots or write notes. 

### Implementation 
To do this, I wanted the web scrapping to be as seamless as possible. No input from the user should be required and their should be minimal resources. Anything involving Selenium or major cloud providers seemed like overkill. For these types of projects, I love to leverage the familiar interface of spreadsheets and the free resources provided by Google Sheets. 

There are built in formulas that make grabbing text from websites extemewly easy. With =XML() and some oplaying around to find the right locators I was able to turn this: 

into this: 

Unformatunately this is where I got stuck for several weeks. I loved the thrill of a quick win and the excitment of seeing web page quickly transfered to the spreadhseet was enough for me to grow complancemtn. But there was still work to be done if this formula was going to serve as a seamless solution. 

## Google App Script 

The component that took this to the next level was writing a short Google App Script. This allowed me transfer the weekly cookies over to a History tab and keep track of the long running inspiration elsewhere. 

I also had to figure out a way to coinvert the blobs that were being retrieved into something useful. This was done with this

[code block]

Finally this was completed here by doing this. 

You can see the completed project here. 

### Conclusion: 

This turned out to be a quick but useful solutioon to keepiong tabs on Crumbl Cookies. With a little upfront work (and an excuse to use my scraping skills) I was able to save the weekly cookies from Crumbl in a simple list. The spreadsheet is a great medium for this as it is familair easy to work with and provides options for further expansion.  

I'm very passionate about projects like these and other automations using Google Apps Script. For more information check out my Google App Script page here for more information and other projects I've worked on. 
    





