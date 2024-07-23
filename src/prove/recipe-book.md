---
title: Recipe Book
description: This activity will have you create a page for a recipe site. It should be responsive and include good SEO, be accessible, and will give the opportunity to practice using Flexbox. We will use Javascript to make the site dynamic and add search.
time: 4 hours
---

## **01** Review and plan

Begin by reviewing the provided wireframes and mockup below to see what the webpage will look like on both small screens and large. You can use the indicated colors and fonts or you can choose some of your own.

![Recipe book wireframe small](/assets/images/recipe-book-wireframe-sm.png)

![Recipe Book wireframe large](/assets/images/recipe-book-wireframe-lg.png)

![Recipe Book mockup small](/assets/images/recipe-book-mockup-sm.webp)
![Recipe Book mockup large](/assets/images/recipe-book-mockup-lg.webp)

Create a new folder to hold this project called `recipes`. Then create an html file: `index.html`, a javascript file: `recipes.js`, and a css file: `recipes.css`. Add the HTML you need to have a valid new page as well as a `link` element for your CSS and a `script` for your Javascript. (Add `recipes.js` in the script element)

We also need some images for the recipes. Download the [recipe images](/examples/recipes/images.zip) and add them to your project folder.

One last setup item. We need to copy and paste the contents of this file: [recipes.js](https://wdd131.netlify.app/examples/recipes/recipes.js), into the  `recipes.js` file you created earlier.

Make sure to add a new link to the site `/index.html` file as well!

## **02** Write the HTML

Next add the HTML to display the content. Create the elements that will house the major parts of the page first: `header`, `main`, and `footer`. The header will contain the logo and name of the site. In the `images` folder that you downloaded earlier you will notice a file called `recipe-book.png`. Use this in the title.

We are using some icons from a site called Flaticon. We are free to use them, but the license require some attribution in return.  This site asks that we add this link `<a href="https://www.flaticon.com/free-icons/recipe" title="recipe icons">Recipe icons created by Freepik - Flaticon</a>` somewhere on the page. Let's put it in the footer.

Along with the attribution for the recipe book icon, we also need some social media icons.  These icons also require attribution. These icons are provided from Iconfinder through an account called AlfredoCreates. The license here is bit more flexible in how we attribute. This time we will do it in a comment. See below for an example:

```markup
<div class="social">
	<!-- Social media icons provided under CC from https://www.iconfinder.com/AlfredoCreates  -->
	<a href="#"><img src="images/instagram_icon.svg" alt="instagram icon"></a>
	<a href="#"><img src="images/youtube_icon.svg" alt="youtube icon"></a>
	<a href="#"><img src="images/pinterest_icon.svg" alt="pinterest icon"></a>
</div>
```
> So that attribution link at the bottom of our site is not the most attractive thing. We can minimize the size (And you should. Try 0.6em), so it is less noticiable, but it will still stick out. What if we don't want to attribute? That is easy...be willing to pay to use the resources. All of these sites remove the attribution requirement if you pay :)

Next create the search form as shown in the wireframe and mockup.

Finally, create the recipe section. You can look in the `recipes.js` file for information. Choose any recipe for now. For the ratings section we want to show filled in and empty stars like the mockup shows. We need to make sure that this very visual rating representation is also accessible. We can use `aria` attributes to do this as seen in the example below.

```markup
<span
	class="rating"
	role="img"
	aria-label="Rating: 4 out of 5 stars"
>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star">⭐</span>
	<span aria-hidden="true" class="icon-star-empty">⭐</span>
	<span aria-hidden="true" class="icon-star-empty">☆</span>
</span>
```

The `aria-label` will be read by the screen reader, and the `aria-hidden="true"` on the stars will tell the screen reader to ignore those and they will not be read.

## **03** Begin styling

In the `recipes.css` file, begin writing the CSS to make your page match the details in the small screen mockup. Below are a few things to note:

- You should resize your browser to be narrow, like a mobile screen. You can do this either through the developer tools, or just by changing the width of your browser
- Start with the global styles.
- The font used for the headlines is called `Amatic SC` and can be found on [Google fonts](https://fonts.google.com/). However if you look closely at the font you should notice that it breaks a couple of our accessibility rules for fonts. Choose another font that you think has a similar feel, but is better for accessibility.
- You can use `Arial, Helvetica,sans-serif` for the rest of the fonts.
- It would be good to add a rule to make our images responsive. We never want an image to be bigger than the space it has available. Something like the following is common:

  ```css
  img {
  	max-width: 100%;
  }
  ```

- You will notice that with everything stacked up on the mobile, we really don't need to do much to get the layout right. You might still use Flexbox though, in column orientation, so we can use the alignment properties as needed.
- Notice as well that on mobile the recipe description is not shown. When we make it responsive on the next step make sure to show the description on wide screens.
- There are not a lot of colors in this page, but custom properties are still a good idea to set important style information. Choose a primary and secondary color to use and set them as you see below.

> ```css
>  @import url("https://fonts.googleapis.com/css2?family=family=Amatic+SC&display=swap");
>  :root {
>  --primary-color: #1B98E0;
>  --secondary-color: #59c3c3;
>  --text-dark: #333;
>  --text-light: #ebebeb;
>  --primary-font: Arial, Helvetica,sans-serif;
>  --secondary-font: "Amatic SC";
>  }
> ```

Continue adding CSS until your page matches the small screen mockup above.

## **04** Make it responsive

At this point your page should look like the narrow mockup above. Now we can add the CSS to make our page responsive to larger screens sizes as well. We will need to use `@media` queries to check for the increasing size of the window. The queries will make changes at certain sizes (breakpoints as they are often called).

Begin by widening your browser window. Watch what happens to the page. At a certain point you will notice that the layout starts looking a little stretched out. This will probably be around 600px. Let's add the first breakpoint there. Since we are using Flexbox this time around we can simply add a rule to change the `flex-direction` from column to row.

Next we will keep widening the screen to watch for when the layout starts looking off again. The next point shuold be somewhere around 960px. Wider than this and the page looks too stretched out. Set this as the widest our layout can grow with another media query.

## **05** Add Social Media Meta information

You should have done some exploration this week about Social Media Meta tags. These meta tags give social media sites the information they need to display a nice summary of our site for easy posting to social media.  We should add some tags to our website so people can share our content on their social media platforms. Here's an example of the recommended tags:

```html
<meta property="og:title" content="Page Title">
<meta property="og:type" content="website" />
<meta property="og:description" content="Page Description">
<meta property="og:image" content="URL to an image">
<meta property="og:url" content="URL of the page">
<meta name="twitter:card" content="summary_large_image">
```

>`og` stands for Open Graph, a format developed by Facebook that many social media sites understand now. There are a lot of options for properties to include. The list above is considered a good starting point for most sites.

Add those to the `head` of the document, then change the values to reflect the content of the page. You can see a list of valid types on the [open graph website](https://ogp.me/#types).

> You may be wondering what to put in for all those values? Well, you can use the same values you used for the `title` and `description` meta tags on your page for the equivalent og tags. The image should be something that represents your page. In this case a picture of food would probably work. This is the image  that will be shown when someone shares your page on social media. The `url`  should be the URL of the page you are on. The `twitter:card` is a Twitter specific tag that tells Twitter how to display the page when someone shares it. The `summary_large_image` tells Twitter to use the image you provided as the main image for the page.

## **06** Plan out the Javascript

In the first part we built and styled a web page with a recipe summary on it. The recipe is currently hard coded however, and does not change. We will begin this activity by writing the Javascript code to select and show a random recipe. It is always a good idea to spend a bit of time planning whenever approaching a new problem. Outline what you think needs to happen to solve this problem. Once you have your list compare it to the one below.

<details>
<summary>List of steps</summary>

1. Import in the list of recipes from `recipes.js` into `main.js`
2. Create a function to generate a random number >= 0 and < num
3. Create a function that will use the imported recipes, and the random function from step 2 to return a random recipe.
4. Using the HTML in the `index.html`, create a template function that will be responsible for generating the HTML necessary to display a recipe.
5. Notice that there are two parts in this template where the markup will change based on the recipe: ratings and tags.
6. Create a template function to generate the markup to display the tags. It should expect a list of tags as a parameter.
7. Create another template function to generate the correct rating stars. This function will expect a number to represent how many stars. Make sure to retain the class and aria info on the ratings!
8. Using the random recipe function, create an `init` function the should run when the page loads to render out a random recipe.
9. Test to make sure everything is working so far.

</details>

## **07** Build the random functions

Generating random numbers in Javascript can be done with `Math.random()`. This function will return a number between 0 and 1. If we multiply that number by another whole number we can adjust the range. Since often we want a whole number at the end we can [floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) the results. Here is an example of how to generate a whole number from 0-4:

```javascript
Math.floor(Math.random()*5) // will give a number 0-4
```

Use that to create the function to generate a random number. You should return the number once generated. Then use that function to return a random entry from an array that we will pass in.

<!-- To test these functions we need to import the recipes found in the provided `recipes.js` file.

```javascript
import recipes from './recipes.js';
```

>Remember that to use the `import` keyword we have to tell the browser that we will be using it. We do that by adding `type="module"` to the script tag in the HTML. So it would look like this:
>
>```html
> <script src="main.js" type="module">
>``` -->

After you have made your effort you can compare your code to the partial solution below if needed.

<details>
<summary>Random functions</summary>

```javascript
const recipes = [];

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

```

</details>

## **08** Create Template Functions

We previously wrote the HTML to display a recipe. It can be found in the `index.html` file. Create a function called `recipeTemplate` that will take a recipe as a parameter, and then copy/paste the HTML from `index.html` in to the function. This should be in a template literal string that is returned.

```javascript
function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="images/apple-crisp.jpg" alt="image of apple crisp on a plate" />
	<figcaption>
		<ul class="recipe__tags">
			<li>Dessert</li>
			<li>Fruit</li>
		</ul>
		<h2><a href="#">Apple Crisp</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</p>
		<p class="recipe__description">
			This apple crisp recipe is a simple yet delicious fall dessert
			that's great served warm with vanilla ice cream.
		</p>
</figcaption>
</figure>`;
}
```

Begin replacing the recipe specific details with information provided by the `recipe` object we will pass into this function. IE replace the `Apple Crisp` title with `recipe.name`.

When you get to the tags and rating sections however, it is not so straightforward. Tags is an array, and the shown stars need to match the real rating of the recipe. We can embed Javascript inside of a template literal, but doing this can quickly lead to hard to read code. We can also call functions from inside of the template literals! This would be a much better option.

Create two functions: `tagsTemplate(tags)` and `ratingTemplate(rating)`. Write the Javascript to finish these two functions. A beginning is given below.

```javascript
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML

	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}
```

Once the functions are completed, use them in the `recipeTemplate`. Then test to make sure it is working.

```javascript
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));
```

## **09** Render the Random Recipe

At this point we are close to being able to show our random recipe on the web page. We need two more functions: `renderRecipes(recipeList)` and `init()`. Create those now. Again some code is provided to get you started

```javascript
function renderRecipes(recipeList) {
	// get the element we will output the recipes into

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

	// Set the HTML strings as the innerHTML of our output element.

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();
```
>You may be wondering why we are rendering a list of recipes when we only have one? Well this is to set us up for the next step...filtering and rendering a list of recipes! With a little planning we can use the same function for both! Notice that in the example code we passed the recipe into the render function like this: `[recipe]`. This converts our single object into an array so we can use it with the render function.

## **10** Filtering Recipes

To finish we need to get the search bar we added earlier working. The good news is that we have done most of the work necessary already when getting the random recipe to show. Let's make another list.

When the "search" button is clicked, do the following:

1. Get whatever was typed into the search input and convert it all to lowercase. (Javascript comparing is case sensitive)
2. Pass the query string into a `filterRecipes(query)` function.
3. In that function use `Array.filter` to filter our recipes. You should check to see if the search term (query) shows up in the name, or the descriptions, or the tag list, or the ingredients list.
4. Sort the list of recipes by name alphabetically.
5. Render the filtered list of recipes to the page.

Begin by attaching an event listener to our search button that will call a function `searchHandler` when it is clicked. Inside of that function you may need to call `event.preventDefault()` if you have problems with the page reloading. See below for more tips:

- You can use `String.toLowerCase()` to convert the input into all lower case.
- You can check to see if a substring is inside another string with something like this `recipe.name.toLowerCase().includes(query)`. That will return a truthy or falsey value.
- To check to see if a string is found inside an array of strings it's a bit more complicated. You have to loop somehow through each item in the array and do a check. `Array.find` works great for this. Here is another example: `recipe.tags.find((item) => item.toLowerCase().includes(query))`
- You can chain conditions together with the logical OR `||`

<details>
<summary>Emergency Use Only!</summary>

```javascript
function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list

}

```

</details>

## **11** Check with Lighthouse

Open your page in Chrome, and access the Lighthouse tool. Run it for mobile first. How does it look? Read through the errors and recommendations. Make changes to get the scores as close to 100 as you can! You should be able to get to at least 95-96%.

## **12** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder2/). Start around step 3.

> Remember your metadata! This week we have another new addition.
>
> - Meta Charset Attribute
> - Title Element
> - Viewport Meta Element
> - Meta Description Element: Short description of the site
> - Meta Author Element
> - Favicon link
> - Link reference to your CSS file.
> - Social Media Meta: **New**
> - Script Element linking to a Javascript file (When using Javascript)
>
> For more information see: [MDN: What's in the Head?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: `https://githubusername.github.io/wdd131/recipes`. Make sure to replace "githubusername" with *your* actual github username :)
