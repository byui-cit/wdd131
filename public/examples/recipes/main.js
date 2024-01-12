import recipes from './recipes.mjs'

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img
		src="${recipe.image}"
		alt="${recipe.name}"
	/>
	<figcaption>
		<ul class="recipe__tags">
			${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">${recipe.description}</p>
	</figcaption>
</figure>`
}

function tagsTemplate(tags) {
	return tags.map((tag) => `<li>${tag}</li>`).join('')
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
		}
	}
	html += `</span>`
	return html
}

function renderRecipes(recipeList) {
	const outputEl = document.querySelector('.recipe-list')
	const html = recipeList.map(recipeTemplate)
	outputEl.innerHTML = html.join('')
}

function random(num) {
	return Math.floor(Math.random() * num)
}

function getRandomListEntry(list) {
	const listLength = list.length
	const randomNum = random(listLength)
	return list[randomNum]
}

function filter(q, reverse = false) {
	const filtered = recipes.filter(
		(recipe) =>
			recipe.name.toLowerCase().includes(q) ||
			recipe.description.toLowerCase().includes(q) ||
			recipe.tags.find((item) => item.toLowerCase().includes(q)) ||
			recipe.recipeIngredient.find((item) => item.toLowerCase().includes(q))
	)
	// sort by name
	const sorted = filtered.sort((a, b) => {
		if (a.name < b.name) return -1
		else if (a.name > b.name) return 1
		else return 0
	})
	if (reverse) {
		return sorted.reverse()
	} else {
		return sorted
	}
}

function searchHandler(e) {
	e.preventDefault()
	const inputEl = document.querySelector('#site-search')
	const q = inputEl.value.toLowerCase()

	const filteredRecipes = filter(q)

	renderRecipes(filteredRecipes)
}

function init() {
	const recipe = getRandomListEntry(recipes)
	renderRecipes([recipe])
}
document.querySelector('#searchButton').addEventListener('click', searchHandler)

init()
