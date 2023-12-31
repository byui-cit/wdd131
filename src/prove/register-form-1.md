---
title: Registration Form part 1
description: This activity will give you a mostly complete, styled form that could be used to register youth for a camp. Our job will be to make the two buttons on the form functional.
time: 60 minutes
---

<ol>
<li>
<!-- START STEP -->
<h2>Review the provided HTML/CSS</h2>

<p>
Create a new folder to hold this project called
<kbd>register</kbd>. Then download the
<a href="../teacher/register/start/form.html">index.html</a> and a
css file:
<a href="../teacher/register/start/register.css">register.css</a>
and place them in your new folder. Add a link as well to this new
page to your root <kbd>/index.html</kbd> file.
</p>
<p>
Begin by reviewing the code that makes up the form and the CSS for
the form. Note that there is a lot going on with the CSS. Most of
it should look familiar though. The exception might be the section
where the radio buttons are styled. There will be several new
things in that section that you may not have seen before. Take a
look and see if you can figure out what is going on.
</p>
<p>
Note as well that there are two buttons on the form. One in the
Participants section. When that button is clicked we should add
the HTML to allow the information for a second participant to be
entered.
</p>
<p>
The other button would be to submit the whole form. When that
button is clicked we the form should do some basic validation, and
then pull some information out of the form fields to display a
simple message to the user to indicate success.
</p>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Add Participant Planning</h2>
<p>
As is our habit, let's start by listing out the steps we would
need to follow to make the add participant button functional.
</p>
<ol>
<li>
	When the page loads set the current number of participants equal
	to 1
</li>
<li>
	Add an event listener to the button. When it is clicked the
	following should happen:
	<ol>
		<li>Add one to the count of participants.</li>
		<li>
			Create a copy of the HTML that makes up the participant
			section of the form. (<code
				>&lt;section class="participant1"&gt;</code
			>
		</li>

		<li>
			Note that <code>id</code> attributes are supposed to be
			unique. If we create an exact copy of that section then we
			will have duplicate ids. So the next step would be to update
			the <code>id</code>s of each element with something to make
			it unique.
		</li>
		<li>
			Insert the new HTML into the
			<code>participants</code> fieldset. Ideally we would want to
			insert the new participant after the last participant and
			before the Add button.
		</li>
	</ol>
</li>
</ol>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Add Participant Implementation</h2>
<p>
Add another file to the project for our Javascript called
<kbd>register.js</kbd>. Then add a <code>script</code> element to
the HTML to connect them.
</p>
<p>
Following the list of steps above implement your Add Participant
button. There are a few tips below that should help:
</p>
<ul>
<li>
	Since we will be adding a pretty complex set of HTML, let's
	create a function called
	<code>participantTemplate(count)</code> where
	<code>count</code> is the current number of participants shown.
</li>
<li>
	To make the ids unique in our template remember that we can do
	something like this:
	<code>`&lt;section class="participant${count}"&gt;`</code> You
	should add the count to each id in the template.
</li>
<li>
	When it is time to insert the new HTML into the form, take a
	look at
	<a href="https://byui-cit.github.io/wdd130/wjs/blog-1.html"
		>insertAdjacentHTML()</a
	>. Notice that we can insert something <code>beforebegin</code>.
	In other words if we select the add button element, and insert
	beforebegin it will place our new participant right where we
	want it.
</li>
<li>
	On a wide screen there is enough room to show two participants
	per row. Add some CSS (grid) to make it so that this will
	happen. When you create the two column grid you will need, you
	will need to fix the button so that it always shows up in the
	bottom row. (HINT: if you make it take up both columns it will
	always stay on the bottom row!)
</li>
</ul>

<!-- END STEP -->
</li>

<li>
<!-- START STEP -->
<h2>Submit Form plan</h2>

<p>
We need a new list of steps for the submit form button. The
following should happen:
</p>
<ol>
<li>
	Add an event listener to the <code>form</code>. We are listening
	for a <kbd>submit</kbd> event.
</li>
<li>
	On submit we need to keep the form from doing what it normally
	would...which is to reload the page.
</li>
<li>
	Then we need to find all of the <code>fee</code> inputs. There
	will be one for each participant that has been added. The totals
	from those fields need to be summed up.
</li>
<li>Get the adult name from the form.</li>
<li>
	Hide the Form, and show the summary element. Insert the
	following message into the summary element: "Thank you NAME for
	registering. You have registered N participants and owe $N in
	Fees."
</li>
</ol>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Submit Form Implementation</h2>

<p>
Again here is a list of tips to help you complete the list above:
</p>
<ul>
<li>
	To keep the form from doing what it normally would we can use
	<code>preventDefault()</code>. Your function would look like
	this:
	<pre><code class="lang-js">function submitForm(event) {
event.preventDefault();
// do the rest of the stuff
}
</code></pre>
</li>
<li>
	To keep things organized create another template function for
	the output message...something like
	<code>successTemplate(info)</code> where <code>info</code> will
	be an object with the adult name, number of participants, and
	fee total.
</li>
<li>
	Also create a function to calculate the fee total. You can use
	the following stub below for that (Make sure to read the
	comments!):

```javascript
function totalFees() {
// the selector below lets us grab any element that has an id that begins with "fee"
let feeElements = document.querySelectorAll("[id^=fee]");
console.log(feeElements);
// querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
// The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
// The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
feeElements = [...feeElements];
// sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
// Remember that the text that was entered into the input element will be found in the .value of the element.

// once you have your total make sure to return it!

}
```

</li>
<li>

An easy way to hide an element with only Javascript is:
`element.style.display = "none";`
OR you could create a class in your CSS like:
`.hide { display: none; }`
and then in the Javascript do something like
`element.classlist.add('hide')`
</li>
</ul>

<!-- END STEP -->
</li>
<li>
<!-- START STEP -->
<h2>Refactor</h2>

<p>
Refactoring is a process that developers often do once they get
their code working, but when they see places where the code could
be improved. The improvements often are to make the code less
brittle, or easier to maintain.
</p>
<p>
We ended up with two template functions in our code. Those
functions feel a little different than the other functions since
they are tied directly with the Web output we are using. Since
those functions are more HTML than Javascript it could be possible
that someone on a content team instead of a development team might
be tasked with making updates when needed.
</p>
<p>
To better organize our code add a new file to the project called
<kbd>Templates.js</kbd> This file will be used as an ES Module. We
should take both of the template functions and move them to this
new file. Then they should be <kbd>export</kbd>ed.
</p>
<p>
Then in the <kbd>register.js</kbd> file we will need to
<code>import</code> our templates. Check your code after making
these changes to make sure everything still works.
</p>
<div class="callout">
<p>
	Remember that you will need to add <code>type="module"</code> to
	your <code>script</code> element in the HTML in order for ES
	Modules to work!
</p>
<pre><code class="lang-markup">&lt;script src="register.js" type="module" &gt;</code></pre>
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
<kbd>https://githubusername.github.io/wdd130/register</kbd>. Make
sure to replace "githubusername" with YOUR actual github username
:)
</p>

<!-- END STEP -->
</li>
</ol>
