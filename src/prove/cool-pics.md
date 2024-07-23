---
title: Cool Pics
description: This activity will have you create a page to act as a photography gallery. The gallery will be responsive, meaning that it will look good on small screens and large. We will use Javascript to make the menu button hide and show the menu on small screens. We will also use Javascript to create an image viewer when we click on the gallery images.
time: 3 hours
---

## **01** Review the site plan

Begin by reviewing the provided mockup below to see what the webpage will look like on both small, medium, and large screens. You can use the indicated colors and fonts or you can choose some of your own.

![CoolPics mockup small](/assets/images/coolpics-mockup-sm.png)

![CoolPics mockup medium](/assets/images/coolpics-mockup-md.webp)

![CoolPics mockup large](/assets/images/coolpics-mockup-lg.png)

Create a new folder to hold this project called <kbd>coolpics</kbd>. Then create an html file: <kbd>index.html</kbd>,a javascript file: <kbd>coolpics.js</kbd> and a css file: <kbd>coolpics.css</kbd>. Add the HTML you need to have a valid new page as well as a <kbd>link</kbd> element for your CSS and a <kbd>script</kbd> for your Javascript.

> Remember in the Mission Statement assignment when you were asked to add more metadata to the `head` of your document? We should add that list to all of our pages moving forward. Here is it again with one new addition:
>
> - Meta Charset Attribute
> - Title Element
> - Viewport Meta Element: **new** for this week!
> - Meta Description Element: Short description of the site
> - Meta Author Element
> - Link reference to your CSS file.
> - Script Element linking to a Javascript file (When using Javascript)
>
> For more information see: [MDN: What's in the Head?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

Finally download these two images and add them to the project: [norris-sm.jpeg](https://wdd131.netlify.app/examples/cool-pics/norris-sm.jpeg) and [norris-full.jpeg](https://wdd131.netlify.app/examples/cool-pics/norris-full.jpeg)

Make sure to add a new link to this assignment to the site `/index.html` file as well! (ie `<a href="coolpics/index.html">Coolpics</a>`)

## **02** Write the HTML

Next add the HTML to display the content. Create the elements that will house the major parts of the page first: `header`, `main`, and `footer`. The header will contain the title of the site and navigation. You can copy/paste the following for the title `Cool Pics 📷`.

In the footer we will provide a simple copyright message: <kbd>&copy;2023 Not a real site 😀</kbd>.

For the `main` element add the headline as shown on the mockup, then add a `section` element to contain our gallery. You should put a `class="gallery"` on that section.  We will just use some placeholder images. We will need 9 images, each image should be in it's own `figure`. An example of how your images can look is below.

```markup
<figure>
	<img src="norris-sm.jpeg" alt="picture">
</figure>
```

## **03** Begin Styling

In the <kbd>coolpics.css</kbd> file begin writing the CSS to make your page match the details in the small screen mockup. Below are a few things to note:

- You should resize your browser to be narrow...like a mobile screen. You can do this either through the developer tools, or just by changing the width of your browser
- Start with the global styles. What font should be used for the body copy and headlines?  What color(s) should links be? Should the base font size be increased? (yes!) Set the color for the header and footer, etc.
- If you want to match the fonts in the mockup you can use `Mooli` for the headlines (`@import url("https://fonts.googleapis.com/css2?family=Mooli&display=swap");`), and `Arial, Helvetica,sans-serif` for the rest.
- It would be good to add a rule to make our images responsive. We never want an image to be bigger than the space it has available. Something like the following is common:

  ```css
  img {
  	max-width: 100%;
  }
  ```

- You can use the provided image `norris-sm.jpeg` for the gallery. The design calls for square images, but the provided one is not square! You can set the height and width of the image to be 250px. You will notice that the image becomes distorted however. We don't want this...we would rather have a crop. You can get that by adding the following rule to your CSS for the image: `object-fit: cover;`
- The "Menu" you see will eventually be used as a button to hide and show the navigation links on mobile. In preparation for that make it a `button` element...then you will need to use CSS to make it look not like a button.
- If you want to use your own colors feel free, otherwise continue for the colors used in the mockup.

> To specify the fonts and colors which we should use, we can use something called [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (CSS variables). These are a great way of keeping track of things like colors, fonts, etc. I think it is far easier to remember something like `--primary-color` than to remember `#52489c`
>
> ```css
>  @import url("https://fonts.googleapis.com/css2?family=family=Mooli&display=swap");
>  :root {
>  --primary-color: #52489c;
>  --secondary-color: #59c3c3;
>  --accent-color: #f45b69;
>  --text-dark: #333;
>  --text-light: #ebebeb;
>  --primary-font: Arial, Helvetica,sans-serif;
>  --secondary-font: Mooli, san-serif;
>  }
> ```
>
> Copy/paste the code above into the top of your CSS file, then to use them in your CSS you would do something like this:
>
> ```css
> body {
>   font-family: var(--primary-font);
>   font-size: 1.2em;
> }
> a:link,
> a:visited {
>   color: var(--accent-color);
> }
> ```

Continue adding css until your page matches the small screen mockup above.

## **04** Make it responsive

At this point your page should look like the narrow mockup above. Now we can add the CSS to make our page responsive to larger screens sizes as well. We will need a `@media` query or two to check for the increasing size of the window...and will make changes at certain sizes or breakpoints as they are often called.

Begin by widening your browser window. Watch what happens to the page. At a certain point you will notice that the layout starts looking a little stretched out. This will probably be around 700px. Let's add the first breakpoint there. At this point we would not have room still for the menu items to fit horizontally...so the only change we will make is to switch our one image column layout to two columns. Add a media query to make this happen (when adapting to an widening screen we should watch `min-width` ). Check the solution below if you get stuck.

<details>
<summary>Emergency use only!</summary>

```css
@media screen and (min-width: 700px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}
```

*note that this code assumes you used grid earlier to help with alignment. If you didn't use grid for your mobile layout (since we only had one column) you will need to add at least one more line above: `display: grid;`

</details>

Next we will keep widening the screen to watch for when the layout starts looking off again. The next point should be somewhere around 1000px. Now we have room for more columns of images...and we have room for the navigation to switch to horizontal.

Add another media query to make the necessary changes. Make sure to hide the "Menu" button as well! We don't need it on the wide screen. A common way to do that is to set `display: none;`

## **05** Fix the menu

Earlier we added a button for the menu that currently does not work. We should fix that. On small screens it would be good to hide the menu items, and just show the menu button. The button should toggle open and closed the menu items. How can we accomplish this? Let's think through a list of steps we might follow.

1. Hide menu items by default
2. Add an event listener to the menu button to listen for a click event.
3. When the button is clicked show the menu if it is hidden, hide the menu if it is shown.

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

## **06** Handle the window resize event

You should now be able to click on the Menu button and hide and show your menu when the screen is small. Earlier we also added the CSS to make the Menu button disappear and the menu switch to horizontal when the screen is large. Depending on how you wrote your CSS you may end up with a problem if a user opens the webpage in a narrow browser window, then manually resizes to be big. Sometimes your menu might stay hidden. We can add some code to protect against this.

One of the events that we can watch for is a `resize` event. This event fires on the `window`. So another list!

1. Write a function called `handleResize` that will check the `innerWidth` of the `window` object. If it is greater than 1000px (this is where we set our media query breakpoint!) then remove the `hide` class from the menu, otherwise add it.
2. Add an event listener to `window` to watch for a `resize` event. Call the `handleResize` function when a resize happens.
3. Call the `handleResize` function immediately when the page loads as well.

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

## **07** Image viewer

We have one last feature to add. On a gallery site like this it is common to allow the user to click on an image to see a larger version. We could create a new html page, and link it to the image, or we could open the larger image in the same page in a modal...a element that opens over the other content. In this case we will do a modal.

Start by building the HTML and CSS for that modal.

1. At the top of your `body` element add a `div` that we can use as a container for the modal.  We also need a way to close the window eventually so add an `X` at the top, and then an `img` element to hold the actual image.  Your html might look like this:

  ```markup
  <div class="viewer">
    <button class="close-viewer">X</button>
    <img src="image.jpeg" alt="alt description">
  </div>
  ```

2. We will style it for the small screen first. Set the position of this element to `fixed`. Then make it take up the whole screen (Hint: `top:0;left:0;bottom:0;right:0;`). Also set the background to be a semi-transparent grey (`rgba(0, 0, 0, 0.75);`)
3. It would be nice to center the image in the space. We can easily do this with Grid.
4. You will probably need to change the font color so we can see our X.
5. To make the X stay above the image we can again use grid to place it in the first row and the image in the second row.
6. If we let the image expand to the whole width of the screen we might end up with images that are too tall sometimes. Let's set the `max-height` of the image to 100%;
7. If you have issues with the viewer showing up behind other things...you can add a `z-index: 10`; to fix it.

> Notice that the example above is using `<button>` instead of `<span>`. Why do you think this is?  The X is going to trigger an action when it is clicked. That is exactly what buttons are for in HTML. We could have just made it a link, but a screen reader expects buttons to be used for actions, and links to be used for navigation. Buttons are also more semantic, and are easier to style.
>
> You should style the button to match the mockup.

Once you are done with your styling the modal should look something like this (You won't have an image showing yet...we will do that soon.):

![Cool Pics small modal example](/assets/images/cool-pics-modal-sm.jpeg)

For the large screen version of our modal let's not let the modal take up the whole screen. We should add a little more padding around the image as well.
![Cool Pics large modal example](/assets/images/cool-pics-modal-lg.jpeg)

## **08** Make it work!

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

## **09** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: `https://githubusername.github.io/wdd131/coolpics`. Make sure to replace "githubusername" with *your* actual github username :)
