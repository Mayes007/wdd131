import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const recipeList = document.getElementById('recipe-list');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const results = recipes.filter(recipe => recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query));
        displayRecipes(results);
    });

    function displayRecipes(recipes) {
        recipeList.innerHTML = ''; // Clear previous results
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('section');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p class="description">${recipe.description}</p>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
                </span>
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            `;
            recipeList.appendChild(recipeElement);
        });
    }

    // Initial display of all recipes
    displayRecipes(recipes);
});
