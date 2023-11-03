---
title: Recipe Book - Part 1
description: This activity will have you create a page for a recipe site. It should be responsive and include good SEO, be accessible, and will give the opportunity to practice using Flexbox.
time: 2 hours
---

## **01** Review the site plan

Begin by reviewing the provided wireframes and mockup below to see what the webpage will look like on both small screens and large. You can use the indicated colors and fonts or you can choose some of your own.

![Recipe book wireframe small](/assets/images/recipe-book-wireframe-sm.png)

![Recipe Book wireframe large](/assets/images/recipe-book-wireframe-lg.png)

![Recipe Book mockup large](/assets/images/recipe-book-wireframe-lg.png)

Create a new folder to hold this project called <kbd>coolpics</kbd>. Then create an html file: <kbd>index.html</kbd>,a javascript file: <kbd>coolpics.js</kbd> and a css file: <kbd>coolpics.css</kbd>. Add the HTML you need to have a valid new page as well as a <kbd>link</kbd> element for your CSS and a <kbd>script</kbd> for your Javascript.

Make sure to add a new link to the site <kbd>/index.html</kbd> file as well!

## **02** Write the HTML

Next add the HTML to display the content. Create the elements that will house the major parts of the page first: `header`, `main`, and `footer`. The header will contain the title of the site and navigation. You can copy/paste the following for the title <kbd>Cool Pics 📷</kdb>.

In the footer we will provide a simple copyright message: <kbd>&copy;2023 Not a real site :)</kbd>.

For the `main` element add the headline as shown on the mockup, then add a `section` element to contain our gallary.  We will just use some placeholder images. An example of how your images can look is below

```markup
<figure>
	<img src="https://picsum.photos/250" alt="picture">
</figure>
```

## **03** Begin Styling

In the <kbd>coolpics.css</kbd> file begin writing the CSS to make your page match the details in the small screen mockup. Below are a few things to note:

- You should resize your browser to be narrow...like a mobile screen. You can do this either through the developer tools, or just by changing the width of your browser
- Start with the global styles. What font should be used for the body copy and headlines?  What color(s) should links be? Should the base font size be increased? (yes!) Set the color for the header and footer, etc.
- If you want to match the fonts in the mockup you can use `Mooli` for the headlines (`@import url("https://fonts.googleapis.com/css2?family=family=Mooli&display=swap");`), and `Arial, Helvetica,sans-serif` for the rest.
- It would be good to add a rule to make our images responsive. We never want an image to be bigger than the space it has available. Something like the following is common:

  ```css
  img {
  	max-width: 100%;
  }
  ```

- The "Menu" you see will eventually be used as a button to hide and show the navigation links on mobile. In preparation for that make it a `button` element...then you will need to use CSS to make it look not like a button.
- If you want to use your own colors feel free, otherwise see below for the colors used in the mockup.

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
>  --secondary-font: Mooli;
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

Begin by widening your browser window. Watch what happens to the page. At a certain point you will notice that the layout starts looking a little stretched out. This will probably be around 500px. Let's add the first breakpoint there. At this point we would not have room still for the menu items to fit horizontally...so the only change we will make is to switch our one image column layout to two columns. Add a media query to make this happen (when adapting to an widening screen we should watch `min-width` ). Check the solution below if you get stuck.

<details>
<summary>Emergency use only!</summary>

```css
@media screen and (min-width: 500px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}
```

*note that this code assumes you used grid earlier to help with alignment. If you didn't use grid for your mobile layout (since we only had one column) you will need to add at least one more line above: `display: grid;`

</details>

Next we will keep widening the screen to watch for when the layout starts looking off again. The next point shuold be somewhere around 800px. Now we have room for more columns of images...and we have room for the navigation to switch to horizontal.

Add another media query to make the necessary changes. Make sure to hide the "Menu" button as well! We don't need it on the wide screen.

## **05** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: <kbd>https://githubusername.github.io/wdd130/apod</kbd>. Make sure to replace "githubusername" with YOUR actual github username :)
