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


import recipes from './recipes.mjs';


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


function getRandomRecipe(recipes) {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}


function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}


function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += '</span>';
    return html;
}


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
        </figcaption>
    </figure>`;
}

