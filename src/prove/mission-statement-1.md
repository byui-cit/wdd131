---
title: Mission Statement Part I
description: This activity will have you re-create the University mission statement in HTML and CSS. You will need to pay close attention to detail and apply padding margin, font-size, line-height, letter-spacing, centering and more to get it right.
time: 60 minutes
---

## **01** Review the mockup

Begin by reviewing the image below to see what we are attempting to create. Try and look for relationships and groupings in the layout that we might need to represent in the HTML.

<div class="fig-block">
			<figure>
				<img
					src="/assets/images/mission-statement-mockup.png"
					alt="mockup of mission statement"
				/>
				<figcaption>The goal.</figcaption>

				</figure>
		</div>

Create a new folder to hold this project called `mission`. Then create an html file: `index.html` and a css file: `styles.css`. Add the HTML you need to have a valid new page as well as a `link` element for your CSS.

>The `head` of an HTML document is more important than we often give credit for. The user does not see what is there, but it is important to the browser, and to search engines. If we want search engines to be able to work with our pages correctly we should include a bit more information in our `head`.
>For the rest of the assignments in this course you should include *at least* the following in your `head`
>
> - Meta Charset Attribute
> - Title Element
> - Meta Description Element: Short description of the site
> - Meta Author Element
> - Link reference to your CSS file.
> - Script Element (When using Javascript)
>
> For more information see: [MDN: What's in the Head?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

## **02** Write the HTML

Next add the HTML to display the content. To save you a bit of time typing the unformatted text has been provided below

>Brigham Young University-Idaho was founded and is supported and guided by The Church of Jesus Christ of Latter-day Saints. Its mission is to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities.
>
>The university does this by:
>Building testimonies of the restored gospel of Jesus Christ and fostering its principles in a wholesome academic, cultural, and social environment. Providing a high-quality education that prepares students of diverse interests and abilities for lifelong learning and employment. Serving as many students as possible within resource constraints. Delivering education that is affordable for students and the Church.

Below you will also find an image for the logo to use.

![BYUI logo, blue](/assets/images/byui-logo_blue.webp)

You should Right-click&rarr;Save image as, and save the image file into the `mission` directory.

Make sure to refer back to the mockup image above often as you write your HTML. In particular, keep in mind semantics. Try to use semantic elements as much as possible. For example, the top section with the title and subtitle is the `header` of the document. The section with the text would be the `main` portion of the content, and the logo at the bottom acts as a sort of `footer`.

**After** you have written your HTML compare it to the example below. Your HTML does **not** have to match this potential solution. There is more than one way to solve this problem. You should however note the differences and think about why.

>**Please** do not copy/paste the HTML below into your document. Your goal in this course is hopefully to learn HTML. Copy/pasting the solution below will **not** help you with this goal. If you see that you need to make changes to your HTML based on what you see below, fix your code, don't copy/paste.

<details>
			<summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>BYUI Mission Statement</title>
		<link rel="stylesheet" href="mission.css" />
	</head>
	<body>
		<div class="content">
			<header class="title">
				<h1>Mission Statement</h1>
				<h2>Brigham Young University-Idaho</h2>
			</header>
			<main>
				<p>
					Brigham Young University-Idaho was founded and is supported and guided
					by The Church of Jesus Christ of Latter-day Saints. Its mission is to
					develop disciples of Jesus Christ who are leaders in their homes, the
					Church, and their communities.
				</p>
				<p><em>The university does this by:</em></p>
				<ol class="does-list">
					<li>
						Building testimonies of the restored gospel of Jesus Christ and
						fostering its principles in a wholesome academic, cultural, and
						social environment.
					</li>
					<li>
						Providing a high-quality education that prepares students of diverse
						interests and abilities for lifelong learning and employment.
					</li>
					<li>
						Serving as many students as possible within resource constraints.
					</li>
					<li>
						Delivering education that is affordable for students and the Church.
					</li>
				</ol>
			</main>
			<footer>
				<img src="logo.webp" alt="BYUI logo" class="logo" />
			</footer>
		</div>
	</body>
</html>
```

You may be wondering about the <code>&lt;div class="content"&gt;</code> element that I placed everything in. This is a fairly common practice, but not always necessary. In this case it was used so that some margin could be added around the outside of the bordered box to move it away from the top of the browser window. See below:

<img src="/assets/images/mission-statement-content-box.png" alt="example of a content box"/>
</details>

## **03** Style the document.

In the `styles.css` file begin writing the CSS to make your page match the mockup. Again here are a few details to keep in mind:

- The font size has been set to 20px for the default.
- The font used is the default: Times New Roman
- The color for the subtitle is #006EB6
- Note that while the titles and the main block of content are centered, the paragraphs are left aligned
- The content inside the box has been limited to a maximum width of 600px.
- Remember that `margin` adds space between elements, while `padding` adds space inside of an element. You will need to use both to match the design.
- To get the titles to look just right you will need to use the [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) property to space the letters out a bit more than they would normally be. You can also use [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) to make sure they are always all caps.
- To get yours to match the image you will also need to increase the [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height). (A value of 1.5 is usually nice)
- The image for the logo is larger than we need. You will need to make it smaller. We can use CSS to do this for now. Later we will learn how to actually change the image file. You can use 150px for the size.

## **04** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: `https://githubusername.github.io/wdd131/mission`. Make sure to replace "githubusername" with *your* actual github username 🙂
