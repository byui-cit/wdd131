---
title: Course Setup
description: This activity will have you create a Github repository that will be used to keep track of the code we write, and be used for hosting our pages as well.
time: 15 minutes
---

## **01** Check to make sure you have git installed.

Begin by opening up a command prompt for your operating system. The easiest way to do this would be to open VS Code and open a terminal (ctrl + ~). Enter the following:

```bash
 git
```

You should see some instructions as a result. If you see an error then follow [these git installation instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder1/)

## **02** Create your working directory and Github Repository

Create a new folder to hold the work you will perform this semester called `wdd131`. Open that folder in VS Code.

For a longer review of setting up our project in Github you can review the [Github Setup instructions](https://byui-wdd.github.io/wdd130/activities/w02-hosting-setup-online.html) from the previous class. Note that wherever you see `wdd130`, you should replace it with `wdd131`.

A shorter version of the instructions is below:


## **03** Create the course Home page

In the `wdd131` project folder that you should still have open in VS Code create an index file: `index.html` and a `style.css` file.  This will act as a portfolio of work for this course. Start by simply adding the HTML necessary to have a valid page. Then in the `head` make sure that you add the following tags:

> - Meta Charset Attribute
> - Title Element
> - Meta Description Element: Short description of the site
> - Meta Author Element: Your name
> - Link reference to your CSS file

Add `header`, `main`, and `footer` elements. In the 'header' add a title that says something like "[name]: WDD 131 portfolio". Replace [name] with your name :)

You are encouraged throughout the semester as things are added to style this page.

Click on the Source Control Icon on the sidebar in VS Code. You should see a button that says "Publish to Github". Click it. VS Code may ask you to login to your Github account, then it will ask whether you want a public or private repository. Pick Public.

## **04** Enable Github Pages

Save your work, commit your changes, and push them to Github.

Open [github.com](https://github.com) in your browser and login. Find the new `wdd131` repository that we just created and click on it. Goto Settings, then scroll down until you see the `Pages` section. Click on that. Find the section that mentions Branches.  There should be a drop down that says "none" and a save button. Switch the dropdown to "main" and click save.

It might take a couple of minutes, but you should see a URL appear right under the title: "Github Pages". You might need to refresh the page.  Copy this link. This will be the URL that you will access your site through, and will be used to turn in your work.

I would recommend pasting the link into the `index.html` file we just created and make it a comment.
