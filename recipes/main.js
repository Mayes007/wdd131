document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: 'Apple Crisp',
            category: 'dessert',
            rating: 4,
            image: 'images/apple-crisp.jpg',
            description: 'This apple crisp recipe is a simple yet delicious fall dessert that\'s great served warm with vanilla ice cream.'
        },
        // Add more recipes as needed
    ];

    const recipeSection = document.getElementById('recipes');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;

        const recipeCategory = document.createElement('p');
        recipeCategory.textContent = recipe.category;

        const recipeRating = document.createElement('div');
        recipeRating.classList.add('rating');
        recipeRating.setAttribute('role', 'img');
        recipeRating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.textContent = i < recipe.rating ? '⭐' : '☆';
            recipeRating.appendChild(star);
        }

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;

        recipeElement.appendChild(recipeImage);
        recipeElement.appendChild(recipeTitle);
        recipeElement.appendChild(recipeCategory);
        recipeElement.appendChild(recipeRating);
        recipeElement.appendChild(recipeDescription);

        recipeSection.appendChild(recipeElement);
    });
});
