---
title: Mission Statement part 2
description: Next we will continue working with the Mission statement page we created. We will add some Javascript to allow a user to	choose a light or dark theme for the page. We created the light theme	last week, we will also need to add the CSS for the dark theme now.
time: 60 minutes
---

## **01** Organizing our thoughts.

Let's begin by creating a list of steps to solve the problem at hand.

1. Add a `select` element to our page with two options: light, dark. Make sure that the light option is first so it comes up by default.
2. Add a class to `body` called "dark"
3. Define a rule in the CSS with the `.dark` selector to make all the changes necessary to convert our design to the dark theme.
4. After getting the dark theme done remove the `dark` class from the `body` element.
5. Create a JS file called `mission.js` and add a `script` element to our HTML file to link them together.
6. With JavaScript select the `select` element out of the DOM.
7. Add an event listener to the selected element. We should listen for a `change` event.
8. Create a function called `changeTheme` that will get called by the event listener when the select option is changed.
That function should do the following:
    1. Check to see what option is currently selected on our theme selector.
    2. If it is "dark" then add the `dark` class to body and change the logo image src to the white logo.
    3. If it is not "dark" then remove the `dark` class from the body element and change the logo image src for the logo to the blue logo.

That is a pretty good list. Let's get started.

## **02** Modify the HTML

A dropdown list is a great way to offer a user a limited list of
choices. In HTML we create a dropdown with a [select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

Add a `select` element to the top of your HTML page. It should have two options: light and dark. Use those for both the value and the display of the option. You will probably need to review the link above for help with the syntax.

```markup
<option value="dark">Dark</option>
```

Add the class of `dark` to the `body` element. We do this now for development purposes. We will remove it once we have our dark theme working and add it back in with Javascript later when needed.

## **03** Style the dark theme

We will start the dark theme with the following changes: set the background color to `#333`, a nice dark grey. Then set the font color to white.

Take a look at the page with those changes. What do you notice?
The subtitle we made blue last week. The blue on black is a little hard to read. This could actually be an [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) issue. Making a site accessible means that we do everything we can to make it work for everyone, including people who may have some sort of disability like vision issues.

Accessibility guidelines recommend that the contrast between colors be at least 4 for smaller text. We can easily check this in Chrome or Firefox. These instructions will assume you are using Chrome.

Open the Developer tools (right-click anywhere on the page and choose "Inspect"

In the "Elements" tab find the `h2` element that holds our subtitle and click on it. This will show us the CSS that is being applied to that element. Find the rule that chages the color to blue. You should see a little blue color swatch next to the hexadecimal value. Click on the color swatch.

![checking color contrast in Chrome developer tools.](/assets/images/chrome-check-color-contrast.png)

You will see a color picker pop up. One of the bits of information on it is the current foreground/background contrast of colors. Ours is currently 2.34. That is too low! We need a new blue color with better contrast. Many organizations have branding style guides to help establish a brand. BYUI is no exception. Here you can find the [BYUI branding guide](https://www.byui.edu/branding/logos). Notice there is a colors section. Go check it out.

You can see that the main blue color is "#006EB6". It also lists several more colors below that can be used for accent. Try the different blues in the list to find one with a good contrast. Add a new rule that will change the blue color on the H2 to your lighter blue when the dark theme is set. If you get stuck check out the partial solution below. (Remember that we can write complex selectors to say things like: "Find an H2 that is *inside* of an element that has a class of "dark")

<details>
<summary>Partial solution</summary>

```css
.dark h2 {
color: somecolor;
}
```

</details>

The last thing that we need to look at is the logo. It is the same blue that the subtitle was, and so has the same contrast issues. If we look at another part of the [BYUI branding guide](https://www.byui.edu/branding/logos) we can see the rules for using the BYUI logo. Notice that when the logo is used on a dark background they recommend white text. Below you will find a new image with white text.

<img
src="/assets/images/byui-logo_white.png"
alt="byui logo white"
style="background-color: #333"
/>

We won't change the image right now, but will do it later with Javascript. You should grab that image and save it as part of your project.

Once you have the dark theme looking how you would like then remove the `dark` class from the `body`.

## **04** Write the Javascript

Create a file called `mission.js` in the mission folder. Add a `script` element to our HTML to link up these two files. Remember to `defer` your script!

If we review the list of steps above we can see the following is left:

1. With JavaScript select the `select` element out of the DOM.
2. Add an event listener to the selected element. We should listen for a `change` event.
3. Create a function called `changeTheme` that will get called by the event listener when the select option is changed. That function should do the following:
    1. Check to see what option is currently selected on our theme selector.
    2. If it is "dark" then add the `dark` class to body and change the logo image src to the white logo.
    3. If it is not "dark" then remove the `dark` class from the body element and change the logo image src for the logo to the blue logo.

To help you out, below you will find a function that has been started with comments. Use this and complete the task

```javascript
const themeSelector = // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
```

> The code above includes 2 things that you may not have seen before. First is an example of a function in Javascript. Functions are a way to group a set of instructions together and then call them when you need them.
>
> You can see that the function definition starts with the `function` keyword. Then you have the name of the function. Then you will see an opening and closing parentheses. In this case they are empty, but in other cases we can use them to pass parameters containing important data that the function can use. Finally you have the code that the function will run inside of `{ }`. You can call/execute/run the function by typing its name followed by parentheses.
> ```javascript
>    changeTheme();
> ```
> Second is an example of an event listener. Event listeners are a way to listen for events (click, touch, scroll, change, etc) that happen on the page and then run a function to do something when that event happens.
>
> You may have noticed that even though it was mentioned above that a function is executed by calling it with parentheses, when we used it in the eventListener we omitted the parentheses! We will learn a lot more about event listeners including the reason why the parentheses were not included next week.
>
> We will be using event listeners and functions a lot in this course.

## **05** Commit and push your work.

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: `https://githubusername.github.io/wdd131/mission`. Make sure to replace "githubusername" with *your* actual github username 🙂
