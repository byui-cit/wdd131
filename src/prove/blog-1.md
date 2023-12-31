---
title: Build a blog I
description: This week we will take the design for a simple blog site that you developed in this week's <a href="https://byui-cit.github.io/learning-modules/modules/design/design-basics/ponder1/">Design a Book Review Site</a> activity and build it with HTML and CSS.
time: 60 minutes
---

<ol >
<li>
		<!-- START STEP -->
		<h2>Review the Wireframe.</h2>
		<p>
			For this activity we will be building a webpage for a book review
			blog. Below you will find a wireframe, and a mockup that we will
			use to guide us in this.
			</p>
			<div class="fig-block">
		<figure>
			<img
				src="https://byui-cit.github.io/learning-modules/img/design-wireframe-final.png"
				alt="book review site wireframe"
			/>
			<figcaption>Wireframe</figcaption>
		</figure>
		<figure>
			<img
				src="/assets/images/book-review-mockup.jpeg"
				alt="book review site Mockup"
			/>
			<figcaption>Mockup</figcaption>
		</figure>
		</div>
		<p>
			After reviewing the wireframe spend some time thinking about what
			parts of the layout should be grouped together in HTML, and what
			tags you might use to do that.
		</p>
		<p class="callout">
			Notice that the Filters portion of the page is not complete in the
			mockup. We will do that part later.
		</p>

		<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
		<h2>Write the HTML</h2>
		<p>
			Add a new directory called <kbd>blog</kbd> to your WDD131
			directory. Add new <kbd>index.html</kbd> and
			<kbd>blog.css</kbd> files inside that new directory. Then open the
			main <kbd>index.html</kbd> for your site (the one at the root of
			the WDD131 directory) and add a link to this new page
			(<kbd>blog/</kbd>). Finally download this
			<a href="/examples/blog/articles.js">javascript file</a> and add
			it to the <kbd>blog/</kbd> directory with the others. This file
			contains information you can use as you write the HTML about a
			couple of books.
		</p>
		<p>
			Next write the HTML you will need to display all of the content
			from the wireframe. Make sure to keep semantics in mind. As well,
			make sure to use elements to group related parts of the page
			together.
		</p>

> Also, don't forget to add the recommended items to the `head` of your document!
>
> - Meta Charset Attribute
> - Title Element
> - Viewport Meta Element: **new** for this week!
> - Meta Description Element: Short description of the site
> - Meta Author Element
> - Link reference to your CSS file.
> - Script Element linking to a Javascript file (When using Javascript)

> When thinking about semantics, you should think in terms of the parts of the page ie: lists, paragraphs, headlines, headers, footers, etc. For example the navigation is made up of a list of links right? So it would make sense to use the HTML element that matches (`<li>`)

>Also keep in mind the accessibility of your page when choosing your elements. For example what should you use for the article date? Visually the date is larger than the surrounding text which makes it stand out. How can we do something similar for a person using a screen reader?</p>

You can skip the filter form for now as we will learn about forms in the next unit. Do leave a space for it though. Leave yourself a note for now, something like `<p>Filter form will go here</p>`

		<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
		<h2>Choose some colors and a Font.</h2>
<p>
			Spend a few minutes thinking about colors and fonts. Pick 2-3
			colors you think would work well together. You can use a resource
			like <a href="https://coolors.co" target="_blank">Coolors</a> to
			help with this.
		</p>
		<p>
			Then pick one or two fonts you like from either the
			<a href="https://blog.hubspot.com/website/web-safe-html-css-fonts"
				>web safe font list</a
			>, or <a href="https://fonts.google.com">Google Fonts</a>
		</p>
		<p>
			Start your CSS by writing your general styles. Set the font family
			for body and headlines, font sizes, colors, link styles, etc.
		</p>
		<div class="callout">
			<p>
				If you would like to match the colors and fonts in the mockup
				instead of choosing your own they are listed below:
			</p>
			<ul>
				<li>Gold color: #EFC69B</li>
				<li>Red color: #AF1B3F</li>
				<li>Dark color: #473144</li>
				<li>Body font: Helvetica, Arial, sans-serif</li>
				<li>
					Headline font: Lora, Impact, serif (Lora can be found on
					Google Fonts.)
				</li>
			</ul>
		</div>

		<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
		<h2>Add the CSS for the layout.</h2>
		<p>
			Using the CSS Grid, write the CSS to
			apply the layout from the wireframe to your page.
		</p>
		<p>There are 3 places where we will need to use simple grids.</p>
		<ol>
			<li>For the navigation in the header</li>
			<li>
				For the main body of the page to get the articles to appear on
				the left and the box that will hold the filters on the right.
			</li>
			<li>
				Inside of each article to get the details on the left and the
				title, image, and description on the right.
			</li>
		</ol>
		<p>
			We will do the first grid for the navigation together, then you
			can finish the others on your own.
		</p>
		<p>
			We need a 3 column grid for the navigation. We can use relative
			units like <code>fr</code> or exact units (<code>px</code>). In
			this case where we know how long each link will be and thus the
			amount of space each needs, and because the menu is aligned to the
			right side of the layout exact units will work better.
		</p>
		<p>
			To create the grid for the navigation we need to look at the HTML
			structure we used for the links and identify the Grid Container
			and the Grid Items. If your HTML looked similar to what is below:
		</p>

```html
<nav>
<ul>
	<li><a href="#">About</a></li>
	<li><a href="#">Archive</a></li>
	<li><a href="#">Search</a></li>
</ul>
</nav>
```

<p>
			...what element would be the container and which elements the items?
			What selector would you use to select the container?
		</p>
<details>
			<summary>Solution</summary>
			<p>
				Container would be the <code>ul</code>, the items would be the
				<code>li</code>. For a selector you could use something like
				<code>nav > ul</code>, OR you could add a class directly to the
				UL and use that class for a selector. IE
				<code>&lt;ul class="main-nav"&gt;</code>, and then
				<code>.main-nav</code> as the selector.
			</p>
			<p>
				You may need to adjust this based on how close your HTML for the
				navigation is to the code above.
			</p>
		</details>
<p>
			Once you have identified your Grid Container, add the CSS rule to
			turn on grid for that element and create 3 columns wide enough to
			fit the text of the links (you may want to refer back to the
			mockup above)
		</p>
<p>
			Your page should look similar to the screenshot below at this
			point.
		</p>
		<div class="fig-block">
<figure>
			<img
				src="/assets/images/book-review-nav-started.jpeg"
				alt="navigation grid"
			/>
			<figcaption>First Grid added</figcaption>
		</figure>
		</div>
<p>
			We have one more CSS Grid related task for the navigation. The grid
			needs to be on the right side of the screen instead of the left.
			This is easy to do with the grid alignment tools. We can use
			<code>justify-content: end;</code>, and
			<code>justify-items: end;</code> to re-align it. We will learn
			more about CSS Grid alignment in a later lesson, but if you want a
			preview check out those properties in the
			<a href="https://css-tricks.com/snippets/css/complete-guide-grid/"
				>CSS Tricks Grid Guide</a
			>
			for some idea about how they work.
		</p>
		<p>
			With the first grid as a model you now should add the other two
			grids to the page. One to take the article details and place them
			to the left of the article content, and the other to place the
			articles to the left of the box that will contain our filters. Add
			the CSS to create those two grids.
		</p>
		<p>
			You should follow the same process of identifying the Grid Container and Grid Items first. If all of the elements you need to
			be Grid Items do not share the same parent in the HTML, you may
			need to change your HTML structure so that they do.
		</p>
		<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
<h2>Finish styling the header</h2>
<p>
			We got a start on the last step on styling the header, but it
			still doesn't look like the mockup. We should finish it now. Refer
			back often to the wireframe and mockup to make sure that you pay
			attention to the spacing and alignment details.
		</p>
<p>
			I find it useful when approaching tasks like this to make a list
			of steps to solve the problem. A list in this case might look
			similar to the following:
		</p>
<ol>
			<li>
				Increase the size of the title of the page, center it, and add
				some padding to match the spacing in the mockup.
			</li>
			<li>Remove the bullets on the navigation list.</li>
			<li>
				Add the lines above and below the navigation element. (border)
			</li>
			<li>
				In the mockup it appears that the navigation links do not go all
				the way to the right edge. Try setting a
				<code>max-width</code> and centering the block by setting
				<code>margin: 0 auto;</code>
			</li>
			<li>
				It looks like the font size of the links is larger than the
				normal font size. Make it so.
			</li>
			<li>
				Increase the height of the navbar to match the mockup. (try
				padding or line-height)
			</li>
		</ol>
<p>
			Once you have the header styled (and matching the mockup as
			closely as you can) you are done for this week. We will finish the
			styling for the articles next week. Your page should look similar
			to below. (Your colors and fonts do not have to match the
			screenshot)
		</p>
		<div class="fig-block">
<figure>
			<img
				src="/assets/images/book-review-part-1.jpeg"
				alt="Book review at end of part one"
			/>
			<figcaption>End of Part one</figcaption>
		</figure>
		</div>
		<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Check Accessibility</h2>

Take a moment to review the accessibility of the work you have done so far. Run the Lighthouse tool against your page. How did you do?  Aim for a score on accessibility of at least 95%.

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Commit and push your work.</h2>
<p>
			Commit your changes, then push them to GitHub. Wait a few minutes
			then check to make sure they show on Github pages. If you need a
			review on how to do this check out
			<a
				href="https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/"
				>github instructions</a
			>. Start around step 3.
		</p>
<p>
			After verifying that your page updated, submit the URL to your
			page in Ilearn. The URL will look something like this:
			<kbd>https://githubusername.github.io/wdd131/blog</kbd>. Make sure to
			replace "githubusername" with **your** actual github username :)
		</p>
<!-- END STEP -->
</li>
</ol>
