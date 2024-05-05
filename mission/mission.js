const themeSelector = document.getElementById('themeSelector');

// Function to change the theme
function changeTheme() {
    // Check the current value of the select element
    const selectedTheme = themeSelector.value;

    // If the selected theme is dark
    if (selectedTheme === 'dark') {
        // Add the dark class to the body
        document.body.classList.add('dark');
        // Change the logo image source to the white logo
        document.querySelector('footer img').src = 'white_logo.png';
    } else { // If the selected theme is light
        // Remove the dark class from the body
        document.body.classList.remove('dark');
        // Change the logo image source back to the blue logo
        document.querySelector('footer img').src = 'blue_logo.png';
    }
}

// Adding event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);

