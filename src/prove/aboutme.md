---
title: An "About Me" Web Page
---


- - -

## Activity Instructions

Estimated Time: 60 minutes

This will have you use some Javascript to enhance the About Me page you created last week.

<div class="bigSteps">
<ol >
	<li>
		<!-- START STEP -->
		<h2>Organizing our thoughts.</h2>
		<p>
			To get some practice using Javascript to modify a web page, we
			will do two things. First we will add a section with Javascript
			that lists out your favorite foods. Next we will add a note to the
			bottom of our about-me page that will show the current day.
			Whenever you start a new programming project, it is a good idea to
			list out the steps we will need to follow in order to solve the
			problem. If we can make our list in small enough steps, each step
			becomes trivial. That is the goal. Let's make a list for the first
			task...adding favorite foods.
		</p>
		<ol>
			<li>
				Create a javascript file and add it to the HTML with a
				<code>script</code> element
			</li>
			<li>
				In the JS file add a variable called
				<code>favoriteFoods</code> and set it equal to an array of foods
				that you like.
			</li>
			<li>
				Create a new paragraph element and store it in a variable.
				Insert the contents of our foods array into the
				<code>textContent</code> portion of that element.
			</li>
			<li>
				Select the <code>body</code> element out of the DOM, and append
				the paragraph as a child to the end of it.
			</li>
		</ol>
	</li>
<li>
            <!-- START STEP -->
            <h2>Add a Javascript file to our page</h2>
            <p>
              Everytime we want to use Javascript on a web page we need to
              create a javascript file to hold our code, and we need to link our
              HTML to the script file so it can work.
            </p>

            <p>
              Open up the <kbd>aboutme/index.html</kbd> file in your editor.
              Create a new file called <kbd>about-me.js</kbd> in the same
              directory as the HTML file (aboutme). Add the following to your
              HTML file in the <code>head</code> element.
            </p>

```html
<script src="about-me.js" defer></script>
```

            <p>
              This line of HTML will let the browser know that we want it to get
              the file and run an Javascript in it. To make sure it is working
              add the following line to the <kbd>about-me.js</kbd>:
            </p>

```javascript
console.log("It worked!")
```
						<p>
              Open your HTML page in the browser (you should have Live Server
              installed in your editor...use that!) Then Right-click anywhere on
              the page and select "Inspect" to open up the browser developer
              tools. Next find and select the "Console" tab and you should see
              the message there. If you do not then check the filename in the
              script src in the HTML file and make sure it matches the actual
              filename.
            </p>

            <!-- END STEP -->
</li>
<li>
            <!-- BEGIN STEP -->
            <h2>Adding Favorite foods.</h2>
            <p>
              Begin following our list of steps by declaring a new variable in
              your JS file called <code>favoriteFoods</code>. Set that variable
              equal to an array of 3-4 of your favorite foods. If you need a
              review on how to create an Array in JS refer back to
              <a
                href="https://byui-cit.github.io/learning-modules/modules/js/variables/prepare1/"
                >readings</a
              >
              for this week.
            </p>
            <p>
              Next we need to create an new paragraph element and store it into
              a variable. Again if you need a reminder on how to do this look to
              the
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#creating_and_placing_new_nodes"
                >DOM readings</a
              >.
            </p>
            <p>
              The link above should help with the next task as well...insert the
              array of favorite foods into your new element. We should probably
              also include some text to indicate what the list is. Something
              like "My Favorite foods: ". Then <code>appendChild</code> to the
              <code>body</code>
            </p>
            <p>
              Before we leave this section...what if we decided that we no
              longer liked the first item on the list? How could we remove that
              item? Do that then update the paragraph element. What if we
              remembered a new favorite food? Add a new food to the end of the
              Array and again update the paragraph element.
            </p>
            <p>
              You may have noticed that once we added the new paragraph that we
              created to the DOM, it is linked, any changes we make to the
              element will automatically show in the browser!
            </p>

            <p>
              After you have completed your code, or if you get stuck you can
              look at the partial solution below. Your code does not need to
              match this 100% to be correct. There is more that one way to solve
              this problem. Do not look until you have given it your best try,
              and do NOT copy/paste this solution into your file. If after
              looking at it you see corrections that need to be made to your
              code...make the corrections.
            </p>
            <details>
              <summary>Partial Solution</summary>
```javascript
const favoriteFoods = ["Curry", "Chocolate", "Fajitas"];
// create new P element
const newP = document.createElement("p");
// add the content to the paragraph. Note that the example below uses template literal strings, we could also have used the + with strings to concatinate
newP.textContent = `My Favorite foods:  ${favoriteFoods}`;
// nothing will show in the browser until we add our new node (element) into the DOM
document.body.appendChild(newP);
// Remove the first item
favoriteFoods.shift();
// set the new content. Why don't we have to append it again?
newP.textContent = `My Favorite foods2:  ${favoriteFoods}`;
// Add a new food to the end of the list
favoriteFoods.push("Sourdough Bread");
// set the new content
newP.textContent = `My Favorite foods3:  ${favoriteFoods}`;
// What if we wanted to see all three versions of the favorite foods list? What would we need to change?
```

            </details>
            <!-- END STEP -->
</li>
<li>
            <!-- BEGIN STEP -->
            <h2>Adding the Date</h2>
            <p>For our second task we need a new list. See below.</p>
            <ol>
              <li>Get the current date and store it in a variable</li>
              <li>Extract the Day from the current date</li>
              <li>
                Add the HTML to our page to display the message ie "Welcome,
                today is"
              </li>
              <li>
                Add an empty HTML element that we can use to insert the day once
                determined.
              </li>
              <li>
                Select the html element we would like to display the day in
                using Javascript.
              </li>
              <li>Insert the day into the HTML.</li>
            </ol>

            <!-- END STEP -->
</li>
<li>
            <!-- START STEP -->
            <h2>Get the current Date</h2>

            <p>
              Dates can be somewhat complicated to work with in code, so most
              languages have methods written to help out with that. Javascript
              is no exception. It has a built in
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"
                >Date()</a
              >
              object that is very helpful. To get the current date we can simply
              do this:
            </p>

```javascript
const today = new Date();
```

            <p>
              Add that line, then right after it add a line to output the
              variable <code>today</code> to the console and check out what we
              got.
            </p>

            <!-- END STEP -->
</li>
<li>
            <!-- START STEP -->
            <h2>Find out which day it is.</h2>
            <p>
              The next step in our list is to extract the current day from the
              date. In the last step you should have seen something like this in
              the console:
              <kbd>Mon Jul 11 2022 13:18:46 GMT-0600 (MDT)</kbd>. We can see
              that it does have the day abbreviation in the string, and while we
              could try and extract it from there, it might end up messy. There
              is a better way.
            </p>
            <p>
              If you return to the
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"
                >Date()</a
              >
              documentation look for something that might help us with our task.
              Did you see it?
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay"
                >getDay()</a
              >
            </p>
            <p>
              Use <code>getDay()</code> to get the current day from our date.
            </p>

            <!-- END STEP -->
</li>
<li>
            <!-- START STEP -->
            <h2>Add HTML</h2>
            <p>
              The next step in our list was to add some HTML to the page where
              we will display our message including the day of the week. Let's
              put it at the bottom of the page in a footer.
            </p>
            <p>
              Add a <code>footer</code> element to your page. Inside of that add
              a paragraph that says "Welcome, today is". After the word "is" we
              need to be able to insert in our day. In order to do this we need
              an element! We need something that will not disrupt the flow of
              the text, and we want the day to be highlighted so let's us the
              <code>strong</code> element. Add one with an id of
              <code>displayToday</code>. <em>After</em> you have it done verify
              what you did with the partial solution below
            </p>
            <details>
              <summary>footer solution</summary>

```html
<footer>
    <p>Welcome, today is <strong id="displayToday"></strong></p>
</footer>
```

              <p>
                Notice how the <code>strong</code> element is empty, and is
                inside of the paragraph. It needs to change based on the actual
                day so we will fill it in with Javascript.
              </p>
            </details>

            <!-- END STEP -->
</li>
<li>
            <!-- START STEP -->
            <h2>Insert the current day into the HTML</h2>
            <p>We are getting close. The last two steps are:</p>
            <ul>
              <li>
                Select the html element we would like to display the day in
                using Javascript.
              </li>
              <li>Insert the day into the HTML.</li>
            </ul>
            <p>
              You can use <code>document.getElementById</code> or
              <code>document.querySelector</code> to accomplish the first. Make
              sure to store the element in a variable once you have selected it.
            </p>
            <p>
              You can then use <code>textContent</code> to update the element
              with the current day. When you do this however you will notice a
              problem. Our day is given to us as a number! We need the full name
              of the day. We need a simple way to convert the number to the
              actual name. An Array will be perfect for this. Review the reading
              from this week on
              <a
                href="https://byui-cit.github.io/learning-modules/modules/js/variables/prepare1/"
                >Arrays</a
              >, then see if you can solve the problem on your own. Remember
              that the parts of an array can be accessed with an index. After
              you have come up with your solution, compare it with the solution
              below.
            </p>
            <details>
              <summary>Solution</summary>

```javascript
const weekday = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
const today = new Date();
console.log(today);
const day = today.getDay();
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekday[day];
```

</details>

            <!-- END STEP -->
</li>
<li>
	<!-- START STEP -->
	<h2>Commit and push to Github</h2>
	<p>
		You should have created a github repo for your work earlier this
		week. We need to now take the updates we have just made and send
		them to Github so they can be seen online.
	</p>
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
              <kbd>https://githubusername.github.io/wdd130/aboutme</kbd>. Make
              sure to replace "githubusername" with *your* actual github username
              :)
            </p>

            <!-- END STEP -->
</li>
</ol>
