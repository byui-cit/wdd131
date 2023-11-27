---
title: Recipe Book - Part 2
description: This activity will have you finish a page for a recipe site. We will make the site dynamic and add search.
time: 2 hours
---

## **01** Review and plan

In Part 1 we built and styled a web page with a recipe summary on it. The recipe is currently hard coded however and does not change. We will begin this activity by writing the Javascript code to select and show a random recipe. It is always a good idea to spend a bit of time planning whenever approaching a new problem. Outline what you think needs to happen to solve this problem...once you have your list compare it to the one below.

<details>
<summary>List of steps</summary>

1. Import in the list of recipes into `main.js`
2. Create a function to generate a random number >= 0 and < num
3. Create a function that will use the imported recipes, and the random function to return a random recipe.
4. Create a template function that will be responsible to generate the HTML necessary to display a recipe.
5. Notice that there are two parts in this template where the markup will change based on the recipe: ratings and tags.
6. Create two more template functions, one to generate the markup for the tags (it should expect a list of tags as a parameter), and another to generate the correct rating stars. (This function will expect a number to represent how many stars)
7. Using the random recipe function, create an `init` function the should run when the page loads to render out a random recipe.
8. Test to make sure everything is working so far.

</details>

## **02** Build the random functions

Generating random numbers in Javascript can be done with `Math.random()`. This function will return a number between 0 and 1. If we multiply that number by another whole number we can adjust the range. Since often we want a whole number at the end we can `floor` the results.

```javascript
Math.floor(Math.random()*5) // will give a number 0-4
```

Use that to create the function to generate a random number. You should return the number once generated. Then use that function to return a random entry from an array that we will pass in.

To test these functions we need to import the recipes found in the provided `recipes.js` file.

```javascript
import recipes from './recipes.js';
```

After you have made your effort you can compare your code to the partial solution below if needed.

<details>
<summary>Random functions</summary>

```javascript
import recipes from './recipes.js';

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

## **03** Create Template Functions

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
				<span aria-hidden="true" class="icon-star-empty">⭐</span>
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

Begin replacing the recipe specific details with information provided by the `recipe` object we will pass into this function. ie replace the `Apple Crisp` title with `recipe.name`.

When you get to the tags and rating sections however it is not so straightforward. Tags is an array, and the shown stars need to match the real rating of the recipe. We can embed Javascript inside of a template literal, but doing this can quickly lead to hard to read code. We can also call functions from inside of the template literals! This would be a much better option.

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

Once the functions are completed use them in the `recipeTemplate`, then test to make sure it is working.

```javascript
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));
```

## **04** Render the Random Recipe

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

## **05** Filtering Recipes

To finish we need to get the search bar we added working. The good news is that we have done most of the work necessary already when getting the random recipe to show. Let's make another list

When the "search" button is clicked do the following:

1. Get whatever was typed into the search input and convert it all to lowercase. (Javascript comparing is case sensitive)
2. Pass the query string into a `filterRecipes(q)` function.
3. In that function use `Array.filter` to filter our recipes. You should check to see if the search term (q) shows up in the name, or the descriptions, or the tag list, or the ingredients list.
4. Sort the list of recipes by name.
5. Render the filtered list of recipes to the page.

Begin by attaching an event listener to our search button that will call a function `searchHandler` when it is clicked. Inside of that function you may need to call `event.preventDefault()` if you have problems with the page reloading. See below for more tips:

- You can use `String.toLowerCase()` to convert the input into all lower case.
- You can check to see if a substring is inside another string with something like this `recipe.name.toLowerCase().includes(q)`. That will return a truthy or falsey value.
- To check to see if a string is found inside an array of strings it's a bit more complicated. You have to loop somehow through each item in the array and do a check. `Array.find` works great for this. Here is another example: `recipe.tags.find((item) => item.toLowerCase().includes(q))`
- You can chain conditions together with the logical OR `||`

<details>
<summary>Emergency Use Only!</summary>

```javascript
function filter(q) {
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

## **05** Commit and push to Github

Commit your changes, then push them to GitHub. Wait a few minutes then check to make sure they show on Github pages. If you need a review on how to do this check out [github instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-github/ponder2/). Start around step 3.

After verifying that your page updated, submit the URL to your page in Ilearn. The URL will look something like this: <kbd>https://githubusername.github.io/wdd131/recipes</kbd>. Make sure to replace "githubusername" with YOUR actual github username :)
