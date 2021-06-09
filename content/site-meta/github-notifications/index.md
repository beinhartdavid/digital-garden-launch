---
title: Github Notifications
date: "2021-05-07T22:12:03.284Z"
description: Notifying Lisa of New Posts    
mainTopic: false
published: false 
rank: "4"
type: "blog"
---

The purpose of this project is to create an automated way of notifying Lisa when I publish a new article on the blog. 

I will need to read the github api and will likely be able to wait for a pull request to occur and then on that event, maybe add a flag or otherwise parse (I don't push to Github often, a skill I am trying to improve, but maybe a Lisa flag) that would then connect to Twilio and send her a text message. 

Bonus points if I could figure out what the changes were so the text could be more meaningful than just hey on the page there is something new. 

Another cool thing would be to put in a delay or otherwise send the text at a better time. 