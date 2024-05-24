---
title: Cool Pics - part 2
description: This activity will have you continue the page built in part 1. We will use Javascript to make the menu button hide and show the menu on small screens. We will also use Javascript to create an image viewer when we click on the gallery images.
time: 2 hours
---

## **01** Fix the menu

In Part 1 we added a button for the menu that currently does not work. We should fix that. On small screens it would be good to hide the menu items, and just show the menu button. The button should toggle open and closed the menu items. How can we accomplish this? Let's think through a list of steps we might follow.

- Hide menu items by default
- Add an event listener to the menu button to listen for a click event.
- When the button is clicked show the menu if it is hidden, hide the menu if it is shown.

The list did not end up very long! Try on your own to write the code to accomplish those steps. Review the code below after you are done (or if you get stuck)

Here are a few tips:

- Remember to hide the menu items by default. I would recommend creating a class that looks like this:

	```css
	.hide {
		display: none;
	}
	```

    You can then add that to the list of links in the nav.
- You can add and remove classes to an element using the `classList` For example if you had used `document.querySelector` to grab the menu button you could do something like this: `menuButton.classList.add('hide')`. This would add a class called `hide` to the element.  We can `add`, `remove`, and `toggle` classes.
- Remember that we can tell the browser we want it to care about an event using `addEventListener`. It follows the form: `element.addEventListener("event", handlerFunction)`

<details>
<summary>Partial solution for hiding and showing menu</summary>

```javascript
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
```

</details>

## **02** Handle the window resize event

You should now be able to click on the Menu button and hide and show your menu when the screen is small. In part 1 we also added the CSS to make the Menu button disappear and the menu switch to horizontal when the screen is large. Depending on how you wrote your CSS you may end up with a problem if a user opens the webpage in a narrow browser window, then manually resizes to be big. Sometimes your menu might stay hidden. We can add some code to protect against this.

One of the events that we can watch for is a `resize` event. This event fires on the `window`. So another list!

- Write a function called `handleResize` that will check the `innerWidth` of the `window` object. If it is greater than 1000px (this is where we set our media query breakpoint!) then remove the `hide` class from the menu, otherwise add it.
- Add an event listener to `window` to watch for a `resize` event. Call the `handleResize` function when a resize happens.
- Call the `handleResize` function immediately when the page loads as well.

As always make your attempt to solve this before looking at the solution. Also if you do use the code below re-type it into your code...do not copy/paste it.  Make sure that you understand what is going on as well. You could ask in Teams, or run the code past an AI for an explanation.

<details>
<summary>Handling a window resize</summary>

```javascript
function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
```

</details>

## **03** Image viewer

We have one last feature to add. On a gallery site like this it is common to allow the user to click on an image to see a larger version. We could create a new html page, and link it to the image, or we could open the larger image in the same page in a modal...a element that opens over the other content. In this case we will do a modal.

Start by building the HTML and CSS for that modal.

- At the top of your `body` element add a `div` that we can use as a container for the modal.  We also need a way to close the window eventually so add an `X` at the top, and then an `img` element to hold the actual image.  Your html might look like this:

  ```markup
  <div class="viewer">
    <button class="close-viewer">X</button>
    <img src="image.jpeg" alt="alt description">
  </div>
  ```

- We will style it for the small screen first. Set the position of this element to `fixed`. Then make it take up the whole screen (Hint: `top:0;left:0;bottom:0;right:0;`). Also set the background to be a semi-transparent grey (`rgba(0, 0, 0, 0.75);`)
- It would be nice to center the image in the space. We can easily do this with Grid.
- You will probably need to change the font color so we can see our X.
- To make the X stay above the image we can again use grid to place it in the first row and the image in the second row.
- If we let the image expand to the whole width of the screen we might end up with images that are too tall sometimes. Let's set the `max-height` of the image to 100%;
- If you have issues with the viewer showing up behind other things...you can add a `z-index: 10`; to fix it.

> Notice that the example above is using `<button>` instead of `<span>`. Why do you think this is?  The X is going to trigger an action when it is clicked. That is exactly what buttons are for in HTML. We could have just made it a link, but a screen reader expects buttons to be used for actions, and links to be used for navigation. Buttons are also more semantic, and are easier to style.
>
> You should style the button to match the mockup.

Once you are done with your styling the modal should look something like this (You won't have an image showing yet...we will do that soon.):

![Cool Pics small modal example](/assets/images/cool-pics-modal-sm.jpeg)

For the large screen version of our modal let's not let the modal take up the whole screen. We should add a little more padding around the image as well.
![Cool Pics large modal example](/assets/images/cool-pics-modal-lg.jpeg)

## **04** Make it work!

The next step is to add the Javascript to make the modal show when an image in the gallery is clicked.

- Copy the html for the modal from the index.html file, and add it to a function called `viewerTemplate` in the js file. This function should accept two arguments: the path for the image, and the alt text. Insert those into the correct places in the template and return it from the function.
    *Make sure to remove the html for the viewer from the index.html file!*

<details>
<summary>viewer template function</summary>

```javascript
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}
```

</details>

- Add a function called `viewHandler`. You can use the following as a guide for writing the viewHandler function

```javascript
function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

}
```

- Add an event listener to the `.gallery` section of your HTML page. It should watch for a click, and use a function called `viewHandler` as the event handler function.
- Write the `closeViewer` function that will remove the viewer div from the DOM when clicked.

<details>
<summary>Emergency use only!</summary>

- The element that was clicked on will always be found in `event.target` in the event handler function.
- All strings in Javascript have a method on them called `split`. You just need to pass in the character you want to split the string up in as an argument. If you need more guidance on using this, do a quick search or ask an AI...
- element.insertAdjacentHTML is an extremely useful upgrade to just modifying `innerHTML` directly on an element. We have 4 options when using it: beforebegin, afterbegin, beforeend, and afterend. See [MDN: insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) to learn more.
- All elements have a `remove` method that can be used to remove the element from the DOM

</details>

## **05** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: <kbd>https://githubusername.github.io/wdd131/coolpics</kbd>. Make sure to replace "githubusername" with *your* actual github username :)
