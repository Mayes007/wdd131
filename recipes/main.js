import recipes from './recipes.mjs';

// Function to generate a random number
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random recipe from the list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Function to generate HTML for tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to generate HTML for ratings
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? `<span aria-hidden="true" class="icon-star">⭐</span>` : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Function to generate HTML for ingredients
function ingredientsTemplate(ingredients) {
    return ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
}

// Function to generate HTML for a recipe
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
            <h3>Ingredients:</h3>
            <ul class="recipe__ingredients">
                ${ingredientsTemplate(recipe.ingredients)}
            </ul>
        </figcaption>
    </figure>`;
}

// Function to render recipes on the page
function renderRecipes(recipeList) {
    const recipeSection = document.getElementById('recipe-list');
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeSection.innerHTML = recipeHTML;
}

// Function to initialize the page with a random recipe
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

// Call init function to load a random recipe on page load
init();

// Function to filter recipes based on the search query
function filterRecipes(query) {
    query = query.toLowerCase();
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));
}

// Function to handle the search form submission
function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();
    
    if (query.trim() === '') {
        const randomRecipe = getRandomListEntry(recipes);
        renderRecipes([randomRecipe]);
    } else {
        const filteredRecipes = filterRecipes(query);
        renderRecipes(filteredRecipes);
    }
}

// Add event listener to the search form
document.getElementById('search-form').addEventListener('submit', searchHandler);
