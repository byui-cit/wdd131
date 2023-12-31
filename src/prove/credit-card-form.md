---
title: Working with Forms, Credit Card Info
description: This will have you practice several topics from the last few weeks to create and style a credit card submission form.
time: 60 minutes
---

<p>
 Our form will be inspired by this
<a href="https://codepen.io/jadepreis/pen/aZmPBY">codepen example</a>.
</p>
<p>
Below you can see a mockup of what we want our form to look like when
we are done.
</p>
<figure>
<img
src="/assets/images/credit-card-form-mockup.jpeg"
alt="mockup for the credit card form we will build and style"
/>
</figure>

<ol>
<li>
<!-- START STEP -->
<h2>Organizing our thoughts.</h2>
<p>
Whenever you start a new project, it is a good idea to list out
the steps we will need to follow in order to solve the problem. If
we can make our list in small enough steps, each step becomes
trivial. That is the goal.
</p>
<ol>
<li>
Add a new directory to our project called <kbd>creditcard</kbd>.
Add an <kbd>index.html</kbd> and a stylesheet file. Make sure to
add a new link to your main index page for your site to this new
page.
</li>
<li>
Add a <code>form</code> to your page. Inside of that form create
an element to act as a card front and another for the card back.
Also add a submit <code>button</code>
</li>
<li>
Using CSS grid place the card front and card back overlapping
like the screenshot. Make sure to place the button as well.Do
some basic styling on the containers as well...round the
corners, add a background color, you could even add a
<code>box-shadow</code> if you wanted. Make sure the back is
behind the front. (You can do this either by ordering the HTML
elements the right way, or by using <code>z-index</code> Higher
numbers put things on the top of the stack.)
</li>

<li>
Begin adding the form elements to the card front and card back.
Remember that a good form input should always have a
<code>label</code> to go along with it! A
<code>placeholder</code> would also be a good idea. You can use
the code below to display the small orange card image.

```markup
<img
class="card-image"
src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDYwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMTAsLmNscy0xMSwuY2xzLTIsLmNscy02LC5jbHMtN3tmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0yLC5jbHMtNXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtNXtmaWxsOiNmZTg2NTc7fS5jbHMtMTAsLmNscy0xMSwuY2xzLTZ7c3Ryb2tlOiNmZTg2NTc7fS5jbHMtMTAsLmNscy02e3N0cm9rZS1saW5lY2FwOnJvdW5kO30uY2xzLTEwLC5jbHMtMTEsLmNscy02LC5jbHMtN3tzdHJva2UtbGluZWpvaW46cm91bmQ7fS5jbHMtNntzdHJva2Utd2lkdGg6NHB4O30uY2xzLTd7c3Ryb2tlOiNlMDZjM2U7fS5jbHMtMTEsLmNscy03e3N0cm9rZS1saW5lY2FwOnNxdWFyZTt9LmNscy0xMCwuY2xzLTExLC5jbHMtN3tzdHJva2Utd2lkdGg6MnB4O30uY2xzLTh7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTQpO30uY2xzLTl7ZmlsbDojZmZkYzgyO308L3N0eWxlPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xLDQ2VjE4YTUsNSwwLDAsMSw1LTVINTRhNSw1LDAsMCwxLDUsNVY0NmE1LDUsMCwwLDEtNSw1SDZBNSw1LDAsMCwxLDEsNDZabTIsMGEzLDMsMCwwLDAsMywzSDU0YTMsMywwLDAsMCwzLTNWMThhMywzLDAsMCwwLTMtM0g2YTMsMywwLDAsMC0zLDNWNDZaTS0xOSw3MUg3OVYtN0gtMTlWNzFaIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yLDQ2YTQsNCwwLDAsMCw0LDRINTRhNCw0LDAsMCwwLDQtNFYxOGE0LDQsMCwwLDAtNC00SDZhNCw0LDAsMCwwLTQsNFY0NloiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTksMjlhMiwyLDAsMCwwLDIsMkgyMmEyLDIsMCwwLDAsMi0yVjIzYTIsMiwwLDAsMC0yLTJIMTFhMiwyLDAsMCwwLTIsMnY2WiIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZS8+PGcgY2xhc3M9ImNscy0zIj48ZyBjbGFzcz0iY2xzLTQiPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTIsNDZhNCw0LDAsMCwwLDQsNEg1NGE0LDQsMCwwLDAsNC00VjE4YTQsNCwwLDAsMC00LTRINmE0LDQsMCwwLDAtNCw0VjQ2WiIvPjwvZz48L2c+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yLDQ2YTQsNCwwLDAsMCw0LDRINTRhNCw0LDAsMCwwLDQtNFYxOGE0LDQsMCwwLDAtNC00SDZhNCw0LDAsMCwwLTQsNFY0NloiLz48L2c+PGxpbmUgY2xhc3M9ImNscy03IiB4MT0iOSIgeDI9IjI4IiB5MT0iMzkiIHkyPSIzOSIvPjxsaW5lIGNsYXNzPSJjbHMtNyIgeDE9IjMyIiB4Mj0iNTEiIHkxPSIzOSIgeTI9IjM5Ii8+PGcgY2xhc3M9ImNscy04Ij48cmVjdCBjbGFzcz0iY2xzLTkiIGhlaWdodD0iMjAiIHdpZHRoPSIyNSIgeD0iNCIgeT0iMTYiLz48L2c+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTksMjlhMiwyLDAsMCwwLDIsMkgyMmEyLDIsMCwwLDAsMi0yVjIzYTIsMiwwLDAsMC0yLTJIMTFhMiwyLDAsMCwwLTIsMnY2WiIvPjxsaW5lIGNsYXNzPSJjbHMtMTEiIHgxPSIxOCIgeDI9IjE4IiB5MT0iMzEiIHkyPSIyMSIvPjxsaW5lIGNsYXNzPSJjbHMtMTEiIHgxPSI5IiB4Mj0iMTciIHkxPSIyNyIgeTI9IjI3Ii8+PGxpbmUgY2xhc3M9ImNscy0xMSIgeDE9IjE4IiB4Mj0iMjQiIHkxPSIyNSIgeTI9IjI1Ii8+PC9zdmc+"
height="55px">
```

</li>
<li>
Create a grid for the card front and position all the elements
based on the mockup.
</li>
<li>Do the same for the card back.</li>
<li>
Use margin, padding, and alignment properties to finish up the
layout.
</li>
<li>
Add some HTML validation to your form inputs. For example, all
of the fields should be required. Some should have specific
lengths, etc.
</li>
</ol>
</li>

<li>
<!-- START STEP -->
<h2>Hints and Tips</h2>
<p>
If you are having difficulties working through the list of steps
above, scan through the list below and see if there is something
that can help!
</p>
<details>
<summary>HTML structure of the form elements</summary>
<p>
Getting your HTML structure correct can make a big difference in
how smoothly your layout comes together. See the screenshot
below for an example of how you might group certain elements in
your HTML. Each of the red boxes represents an HTML element.
Notice how each item that I wanted to place directly on the grid
is grouped together with an element.
</p>
<figure>
<img
	src="/assets/images/credit-card-form-elements.png"
	alt="screenshot showing element structure"
/>
</figure>
</details>
<details>
<summary>Main Grid</summary>
<p>
If you are having a hard time getting the main grid to work
(this is the one that places the card front, card back, and
submit button) take a look at the screenshot below for some
hints. (the wide darker lines indicate that a
<code>gap</code> was used.
</p>
<figure>
<img
	src="/assets/images/credit-card-form-main-grid.jpeg"
	alt="screenshot showing main grid lines"
/>
</figure>
</details>
<details>
<summary>Card Front Grid</summary>
<p>
If you are having a hard time getting the card front grid to
work, take a look at the screenshot below for some hints. (the
wide darker lines indicate that a <code>gap</code> was used)
Notice as well that there is a space all the way around the
grid...how does one add space on the inside of an element?
</p>
<figure>
<img
	src="/assets/images/credit-card-form-front-grid.jpeg"
	alt="screenshot showing card front grid lines"
/>
</figure>
</details>
<details>
<summary>Card Back Grid</summary>
<p>
If you are having a hard time getting the card back grid to
work, take a look at the screenshot below for some hints. Notice
as well that there is a space on the top and bottom of the
grid...how does one add space on the inside of an element?
</p>
<p>
To create the dark grey bar on the card back you can just use an
empty div. Set a <code>background-color</code>, and a
<code>height</code>, then position it in your grid.
</p>
<figure>
<img
	src="/assets/images/credit-card-form-back-grid.jpeg"
	alt="screenshot showing card back grid lines"
/>
</figure>
</details>
<details>
<summary>Spacing and alignment.</summary>
<p>
Because we are using CSS Grid we have access to all of it's
alignment properties. These include
<code
	>justify-content, justify-items, align-items, align-self,
	justify-self</code
>. You can review this
<a
	href="https://css-tricks.com/snippets/css/complete-guide-grid/"
	>CSS Grid Cheatsheet</a
>
for a refresher about what each does if you need it.
</p>
<p>
You can accomplish a lot with some well placed
<code>margin</code> and <code>padding</code> as well!
</p>
</details>

<!-- END STEP -->
</li>

<li>
<!-- START STEP -->
<h2>Commit and push to Github</h2>

<p>
Commit your changes, then push them. Wait a few minutes then check
to make sure they show on Github pages. If you need a review on
how to do this check out
<a
href="https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/"
>github instructions</a
>. Start around step 3.
</p>

<p>
After verifying that your page updated, submit the URL to your
page in Ilearn. The URL will look something like this:
<kbd>https://githubusername.github.io/wdd130/creditcard</kbd>.
Make sure to replace "githubusername" with YOUR actual github
username :)
</p>

<!-- END STEP -->
</li>
</ol>

