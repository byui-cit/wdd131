---
title: Registration Form
description: This activity will give you a mostly complete, styled form that could be used to register youth for a camp. Our job will be to make the two buttons on the form functional.
time: 60 minutes
---

## **01** Review the provided HTML/CSS

Create a new folder to hold this project called `register`. Then download the [index.html](/examples/register/start/form.html) (you may need to view source then copy and paste for the HTML) and a CSS file: [register.css](/examples/register/start/register.css) and place them in your new folder. Add a link as well to this new page to your root `/index.html` file.

Begin by reviewing the code that makes up the form and the CSS for the form. Note that there is a lot going on with the CSS. Most of it should look familiar though. The exception might be the section where the radio buttons are styled. There will be several new things in that section that you may not have seen before. Take a look and see if you can figure out what is going on.

Note as well that there are two buttons on the form. One in the Participants section. When that button is clicked we should add the HTML to allow the information for a second  participant to be entered.

The other button would be to submit the whole form. When that button is clicked we the form should do some basic validation, and then pull some information out of the form fields to display a simple message to the user to indicate success.

## **02** Add Participant Planning

As is our habit, let's start by listing out the steps we would need to follow to make the add participant button functional.

1. When the page loads set the current number of participants equal to 1
2. Add an event listener to the button. When it is clicked the following should happen:
    1. Add one to the count of participants.
    2. Create a copy of the HTML that makes up the participant section of the form. (`<section class="participant1">`)
    3. Note that `id` attributes are supposed to be unique. If we create an exact copy of that section then we will have duplicate ids. So the next step would be to update the `id`s of each element with something to make it unique.
    4. Insert the new HTML into the `participants` fieldset. Ideally we would want to insert the new participant after the last participant and before the Add button.

## **03** Add Participant Implementation

Add another file to the project for our Javascript called `register.js`. Then add a `script` element to the HTML to connect them.

Following the list of steps above implement your Add Participant button. There are a few tips below that should help:

- Since we will be adding a pretty complex set of HTML, let's create a function called `participantTemplate(count)` where `count` is the current number of participants shown.
- To make the ids unique in our template remember that we can do something like this: `<section class="participant${count}">` You should add the count to each id in the template.
- When it is time to insert the new HTML into the form, take a look at [insertAdjacentHTML()](https://byui-cit.github.io/wdd130/wjs/blog-1.html). Notice that we can insert something `beforebegin`. In other words if we select the add button element, and insert beforebegin it will place our new participant right where we want it.
- On a wide screen there is enough room to show two participants per row. Add some CSS (grid) to make it so that this will happen. When you create the two column grid you will need, you will need to fix the button so that it always shows up in the bottom row. (HINT: if you make it take up both columns it will always stay on the bottom row!)

## **04** Submit Form plan

We need a new list of steps for the submit form button. The following should happen:

1. Add an event listener to the `form`. We are listening for a `submit` event.
2. On submit we need to keep the form from doing what it normally would...which is to reload the page.
3. Then we need to find all of the `fee` inputs. There will be one for each participant that has been added. The totals from those fields need to be summed up.
4. Get the adult name from the form.
5. Hide the Form, and show the summary element. Insert the following message into the summary element: "Thank you NAME for registering. You have registered N participants and owe $N in Fees."

## **05** Submit Form Implementation

Again here is a list of tips to help you complete the list above:

- To keep the form from doing what it normally would we can use `preventDefault()`. Your function would look like this:
    ```javascript
     function submitForm(event) {
     event.preventDefault();
     // do the rest of the stuff
     }
     ```
- To keep things organized create another template function for the output message...something like `successTemplate(info)` where `info` will be an object with the adult name, number of participants, and fee total.
- Also create a function to calculate the fee total. You can use the following stub below for that (Make sure to read the comments!):

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
- An easy way to hide an element with only Javascript is:
    `element.style.display = "none";`
    OR you could create a class in your CSS like:
    `.hide { display: none; }`
    and then in the Javascript do something like
    `element.classlist.add('hide')`

<!-- ## **06** Refactor

Refactoring is a process that developers often do once they get their code working, but when they see places where the code could be improved. The improvements often are to make the code less brittle, or easier to maintain.

We ended up with two template functions in our code. Those functions feel a little different than the other functions since they are tied directly with the Web output we are using. Since
those functions are more HTML than Javascript it could be possible that someone on a content team instead of a development team might be tasked with making updates when needed.

To better organize our code add a new file to the project called `Templates.js` This file will be used as an ES Module. We should take both of the template functions and move them to this new file. Then they should be `export`ed.

Then in the `register.js` file we will need to `import` our templates. Check your code after making these changes to make sure everything still works.

>Remember that you will need to add `type="module"` to your `script` element in the HTML in order for ES Modules to work!
>
>```markup
><script src="register.js" type="module">
>``` -->

## **06** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

> Remember your metadata! This week we have another new addition.
>
> - Meta Charset Attribute
> - Title Element
> - Viewport Meta Element
> - Meta Description Element: Short description of the site
> - Meta Author Element
> - Favicon link: **New**
> - Link reference to your CSS file.
> - Script Element linking to a Javascript file (When using Javascript)
>
> For more information see: [MDN: What's in the Head?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: `https://githubusername.github.io/wdd131/register`. Make sure to replace "githubusername" with *your* actual github username :)
