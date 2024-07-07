// main.js
import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('article');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${generateStars(recipe.rating)}
            </div>
            <p class="description">${recipe.description}</p>
        `;

        recipesContainer.appendChild(recipeElement);
    });
});

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<span aria-hidden="true" class="icon-star">⭐</span>' : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
    return stars;
}
