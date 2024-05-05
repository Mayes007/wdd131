const themeSelector = document.getElementById('themeSelector');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        // Change the logo image src to the white logo
        // Example: document.getElementById('logo').src = 'white_logo.png';
    } else {
        document.body.classList.remove('dark');
        // Change the logo image src to the blue logo
        // Example: document.getElementById('logo').src = 'blue_logo.png';
    }
}