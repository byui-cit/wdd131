---
title: Astronomy Pic of the Day part 2
description: This Week we will finish up our version of the Astronomy Pic of the Day site. We will add a form that will allow a user to request a pic from a specific day instead of only giving the current day.
time: 2 hours
---

<ol >
<li>
<!-- START STEP -->
<h2>Build and Style the form</h2>
<p>
Begin by reviewing the
<a href="apod/site-plan.html">site plan</a> again to see the
details of what we are attempting to create. Pay special attention
to the form portion on the top of the page.
</p>
<p>
Add the HTML and CSS necessary to make a form that matches the one
in the mockup. Use a normal <code>type="text"</code> input for the
date.
</p>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Javascript</h2>
<p>
We should write up a list of steps to indicate how the page should
function.
</p>
<ol>
<li>
When the Get Image button is clicked:
<ol>
<li>Get the date from the text input</li>
<li>
Build a new URL using the date that will request the image
from that day.
</li>
<li>Request the image</li>
<li>
Check the response, if it is not ok show an error to the
user with the message sent back from the server.
</li>
<li>
If the response is OK (we got an image) display it. and hide
any errors that might be showing.
</li>
</ol>
</li>
</ol>
<p>
Begin by creating a function called <kbd>getApodByDate</kbd>. Then
add an event listener to the "Get Image" button that will call the
new function when the button is clicked.
</p>
<p>
Complete the <kbd>getApodByDate</kbd> function. It should get the
value out of the input, and append it to the URL we used last week
along with the <code>date</code> filter and the value from our
input. The new URL should look like this:
</p>

```javascript
apodUrl + `&date=${date.value}`
```

assuming that

```javascript
apodUrl ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
```

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Error checking</h2>
<p>
In the list of steps above we listed the need to check to make
sure that we got good data back from the API. Whenever you allow
input from users there is the chance that soemthing will break. We
need to make sure it breaks gracefully :)
</p>
<p>
First update the <code>getApod(url)</code> function that we
created last week. When we get a response from a server through
fetch, there is always a property called <code>ok</code>. This
will be true if things worked, and false if some sort of problem
happened. Add an if statement to your function to check
<code>ok</code>. An example of how that might look is given below
</p>

```javascript
async function getApod(url) {
const res = await fetch(url);
const data = await res.json();
// check to make sure we got a good response
if (res.ok) {
// success...make sure any previous error message is gone.

//return the data
} else {
// error...output the message returned by the server

// return false to show that something went wrong
}
}
```

<p>
To make finishing the above function easier, add two more
functions. Stubs for them can be found below
</p>

```javascript
function showError(msg) {
//get the error element

//set the content of the element to the msg

// remove the hide class

}
function hideError() {
//get the error element

// clear out the content of the element

// add the hide class

}
```

<p>
Finish implementing those functions, then use them in
<code>getApod</code> to show errors when appropriate.
</p>
<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Make the page responsive</h2>
<p>
Your page should now be looking finished and good...as long as the
browser window is small enough. Try increasing the width of your
browser however. What do you notice? The image just keeps growing...becoming so tall that you can't see the title and description below. If you go back and review the <a href="/examples/apod/site-plan.html">site plan</a> you will see that on wide screens the layout should switch to 2 columns. Add the media query(s) that will make that change as well as the other changes to the date form shown.
</p>
<p>Here are a few things to keep in mind:</p>
<ul>
<li>Flexbox makes it really easy to switch from a column layout to a row.</li>
<li>You may need to set a width on the image after you change your flex direction to get it to behave.</li>
<li>When setting widths on flex items a width of 100% will cause it to take up the whole row.</li>
<li>...but YOU have control over whether Flexbox items wrap or not.</li>
<li>Remember that when overriding a rule in a media query you don't have to include all the properties in the original rule. Only include the properties that need to change.</li>
</ul>

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
