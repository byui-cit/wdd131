---
title: Mission Statement part 2
description: Next we will continue working with the Mission statement page we created. We will add some Javascript to allow a user to	choose a light or dark theme for the page. We created the light theme	last week, we will also need to add the CSS for the dark theme now.
time: 60 minutes
---

<ol>
<li>
		<!-- START STEP -->
		<h2>Organizing our thoughts.</h2>
		<p>
			Let's begin by creating a list of steps to solve the problem
			at hand.
		</p>
		<ol>
			<li>
				Add a <code>select</code> element to our page with two options:
				light, dark. Make sure that the light option is first so it
				comes up by default.
			</li>
			<li>Add a class to <code>body</code> called "dark"</li>
			<li>
				Define a rule in the CSS with the <code>.dark</code> selector to
				make all the changes necessary to convert our design to the dark
				theme.
			</li>
			<li>
				After getting the dark theme done remove the
				<code>dark</code> class from the <code>body</code> element.
			</li>
			<li>
				Create a JS file called <kbd>mission.js</kbd> and add a
				<code>script</code> element to our HTML file to link them
				together.
			</li>
			<li>
				With JavaScript select the <code>select</code> element out of
				the DOM.
			</li>
			<li>
				Add an event listener to the selected element. We should listen
				for a <kbd>change</kbd> event.
			</li>
			<li>
				Create a function called <code>changeTheme</code> that will get
				called by the event listener when the select option is changed.
				That function should do the following:
				<ol>
					<li>
						Check to see what option is currently selected on our theme
						selector.
					</li>
					<li>
						If it is "dark" then add the <code>dark</code> class to body
						and change the logo image src to the white logo.
					</li>
					<li>
						If it is not "dark" then remove the <code>dark</code> class
						from the body element and change the logo image src for the logo
						to the blue logo.
					</li>
				</ol>
			</li>
		</ol>
		<p>That is a pretty good list. Let's get started.</p>

		<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
		<h2>Modify the HTML</h2>
		<p>
			A dropdown list is a great way to offer a user a limited list of
			choices. In HTML we create a dropdown with a
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"
				>select element</a
			>.
		</p>
		<p>
			Add a <code>select</code> element to the top of your HTML page. It
			should have two options: light and dark. Use those for both the
			value and the display of the option. You will probably need to
			review the link above for help with the syntax.
		</p>

```markup
<option value="dark">Dark</option>
```

		<p>
			Add the class of <code>dark</code> to the
			<code>body</code> element. We do this now for development
			purposes. We will remove it once we have our dark theme working
			and add it back in with Javascript later when needed.
		</p>

		<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
		<h2>Style the dark theme.</h2>
<p>
			We will start the dark theme with the following changes: set the
			background color to <kbd>#333</kbd>, a nice dark grey. Then set
			the font color to white.
		</p>
		<p>
			Take a look at the page with those changes. What do you notice?
			The subtitle we made blue last week. The blue on black is a little
			hard to read. This could actually be an
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
				>accessibility</a>
			issue. Making a site accessible mean that we do everything we can
			to make it work for everyone, including people who may have some
			sort of disability like vision issues.
		</p>
		<p>
			Accessibility guidelines recommend that the contrast between
			colors be at least 4 for smaller text. We can easily check this in
			Chrome or Firefox. These instructions will assume you are using
			Chrome.
		</p>
		<p>
			Open the Developer tools (right-click anywhere on the page and
			choose "Inspect"
		</p>
		<p>
			In the "Elements" tab find the <code>h2</code> element that holds
			our subtitle and click on it. This will show us the CSS that is
			being applied to that element. Find the rule that chages the color
			to blue. You should see a little blue color swatch next to the
			hexadecimal value. Click on the color swatch.
		</p>
		<img
			src="/assets/images/chrome-check-color-contrast.png"
			alt="checking color contrast in Chrome developer tools."
		/>
		<p>
			You will see a color picker pop up. One of the bits of information
			on it is the current foreground/background contrast of colors.
			Ours is currently 2.34. That is too low! We need a new blue color
			with better contrast. Many organizations have branding style
			guides to help establish a brand. BYUI is no exception. Here you can
			find the <a href="https://www.byui.edu/branding/logos">BYUI branding guide</a>. Notice there is a colors section. Go check it out.
		</p>
		<p>
			You can see that the main blue color is "#006EB6". It also lists
			several more colors below that can be used for accent. Try the
			different blues in the list to find one with a good contrast. Add
			a new rule that will change the blue color on the H2 to your
			lighter blue when the dark theme is set. If you get stuck check
			out the partial solution below. (Remember that we can write
			complex selectors to say things like: "Find an H2 that is
			<em>inside</em> of an element that has a class of "dark")
		</p>
<details>
<summary>Partial solution</summary>

```css
.dark h2 {
color: somecolor;
}
```

</details>
		<p>
			The last thing that we need to look at is the logo. It is the same
			blue that the subtitle was, and so has the same contrast issues.
			If we look at another
			<a href="https://www.byui.edu/branding/logos"
				>part of the branding guide</a
			>
			we can see the rules for using the BYUI logo. Notice that when the
			logo is used on a dark background they recommend white text. Below
			you will find a new image with white text.
		</p>
		<img
			src="/assets/images/byui-logo_white.png"
			alt="byui logo white"
			style="background-color: #333"
		/>
<p>
			We won't change the image right now, but will do it later with
			Javascript...but you should grab that image and save it as part of
			your project.
		</p>
		<p>
			Once you have the dark theme looking how you would like then
			remove the <code>dark</code> class from the <code>body</code>
		</p>
	<!-- END STEP -->
</li>
<li>
		<!-- START STEP -->
		<h2>Write the Javascript</h2>
		<p>
			Create a file called <kbd>mission.js</kbd> in the mission folder.
			Add a <code>script</code> element to our HTML to link up these two
			files. Remember to <code>defer</code> your script!
		</p>
		<p>
			If we review the list of steps above we can see the following is
			left:
		</p>
		<ol>
			<li>
				With JavaScript select the <code>select</code> element out of
				the DOM.
			</li>
			<li>
				Add an event listener to the selected element. We should listen
				for a <kbd>change</kbd> event.
			</li>
			<li>
				Create a function called <code>changeTheme</code> that will get
				called by the event listener when the select option is changed.
				That function should do the following:
				<ol>
					<li>
						Check to see what option is currently selected on our theme
						selector.
					</li>
					<li>
						If it is "dark" then add the <code>dark</code> class to body
						and change the logo image src to the white logo.
					</li>
					<li>
						If it is not "dark" then remove the <code>dark</code> class
						from the body element and change the logo image src for the logo
						to the blue logo.
					</li>
				</ol>
			</li>
		</ol>
		<p>
			To help you out, below you will find a function that has been
			started with comments. Use this and complete the task
		</p>

```javascript
const themeSelector = // replace with code to select dropdown element out of the HTML
function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!

// if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
```
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
			<kbd>https://githubusername.github.io/wdd131/mission</kbd>. Make
			sure to replace "githubusername" with YOUR actual github username
			:)
		</p>
<!-- END STEP -->
	</li>
</ol>
