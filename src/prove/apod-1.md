---
title: Astronomy Pic of the Day part 1
description: This activity will have you create a page to display a new picture every day retrieved from an open API that NASA provides. You will be provided a site plan for the page we will be building. You will need to pay close attention to the detail in the plan (which includes a wireframe and Mockup) and apply padding, margin, font-size, line-height, letter-spacing, centering, Grid, and more to get it right.
time: 2 hours
---

<ol >
<li>
<!-- START STEP -->
<h2>Review the site plan</h2>
<p>
Begin by reviewing the
<a href="/examples/apod/site-plan.html">site plan</a> to see the details of
what we are attempting to create. All of the information we need
to successfully create this page is there. As you review the
wireframe try and look for relationships and groupings in the
layout that we might need to represent in the HTML.
</p>

<p>
Create a new folder to hold this project called
<kbd>apod</kbd>. Then create an html file: <kbd>index.html</kbd>,
a javascript file: <kbd>apod.js</kbd> and a css file:
<kbd>apod.css</kbd>. Add the HTML you need to have a valid new
page as well as a <kbd>link</kbd> element for your CSS and a
<kbd>script</kbd> for your Javascript.
</p>
<p>
Make sure to add a new link to the site
<kbd>/index.html</kbd> file as well!
</p>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Write the HTML</h2>
<p>
Next add the HTML to display the content. Create the elements that
will house the major parts of the page first: <code>header</code>,
<code>main</code>, and <code>footer</code>. The header will just
contain the title of the site. (You can find that in the site
plan. Tip: you can copy/paste the planet emoticon!)
</p>
<p>
In the footer we will provide some attribution to NASA. Refer
again to the site plan for the language. The link goes to
<kbd>https://apod.nasa.gov/apod/astropix.html</kbd>
</p>
<p>
At this point we really just need 3 more containers in
<code>main</code> and we will be close on the HTML. We need an
element to hold the search form (You can leave this empty for now.
We will code that up next week), and element for use in displaying
errors which will intially be hidden, and an element which we will
insert the picture and info into once we retrieve them. Add
classes to those elements. We will need them later for styling
and/or Javascript.
</p>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Retrieve an image.</h2>
<p>
Instead of jumping into the CSS, we are actually going to move to
some Javascript. We can't easily finish the HTML until we have the
information from the API!
</p>
<p>
In the <kbd>apod.js</kbd> file create a variable
<code>apodUrl</code>. Set it equal to
<code>https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY</code>
</p>
<p>
Next write a function called <code>getApod(url)</code> that will
use that URL to fetch the current picture of the day. Once you
have it you should <code>console.log</code>, or otherwise inspect
the object we got back. Pay attention to all the fields. Then
refer back to the wireframe. Take note of the information we are
displaying, then find where each bit is stored in the data we got
back from the API.
</p>
<p>
Next create a template function that we will use to combine the
data with some HTML. Make sure again to keep the wireframe/mockup
in mind as you decide how to structure your HTML. After you have
written your function you can check below to see one possible
solution.
</p>
<details>
<summary>photo Template function</summary>

```javascript
function photoTemplate(photo) {
return `<section class="photo">
<img src=${photo.url} alt="${photo.title}">
<div>
<h2>${photo.title}</h2>
<h3>${photo.date}</h3>
<p>${photo.explanation}</p>
</div>
</section>`;
}
```

</details>
<p>
Finally write a <code>init()</code> function. In that function
would should call the other two functions we created to retrieve
the data, format the data with HTML, and then insert the HTML into
our page.
</p>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Style</h2>
<p>
In the <kbd>apod.css</kbd> file begin writing the CSS to make your
page match the details in the site plan and mockup. Below are a
few things to note:
</p>
<ul>
<li>Start with the layout in the mobile wireframe. Working mobile first is usually easier. We will finish the wide screen layout in the next part of this assignment.</li>
<li>For your layouts you should use Flexbox instead of Grid.</li>
<li>
For the error box, since we haven't implemented it yet, type
something into it, then apply your styling. Once you have it
looking the way you like then remove your text, and hide it.
</li>
<li>
To hide the error box the easiest way would probably be to
create a rule in your CSS like this:
<code>.hide { display: none; }</code>. Then add that as a second
class to your error box. ie:
<code>&lt;section class="error hide"&gt;</code>
</li>
<li>
The images that come back from NASA will probably be larger than
the space we want to display them in. Remember that you can use
<code>max-width</code> to make them fit.
</li>

</ul>
<div class="callout">
<p>
The site plan provides all the colors which we should use, below
you can find that information provided in the form of
<a
href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
>CSS custom properties</a
>
(CSS variables). We saw these in Unit 2 as well. These are a great way of keeping track of things like colors, fonts, etc.
</p>

```css
:root {
--dark-blue: #313d5a;
--platinum: #eaeaea;
--lilac: #73628a;
--fire-opal: #e3655b;
}
```

<p>
Copy/paste the code above into the top of your CSS file, then to
use them in your CSS you would do something like this:
</p>

```css
a:link,
a:visited {
color: var(--lilac);
}
```

</div>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Commit and push to Github</h2>

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
<kbd>https://githubusername.github.io/wdd130/apod</kbd>. Make sure
to replace "githubusername" with *your* actual github username :)
</p>

<!-- END STEP -->
</li>
</ol>
