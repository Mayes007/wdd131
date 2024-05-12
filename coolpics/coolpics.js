document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    // Function to toggle the visibility of the navigation menu
    function toggleMenu() {
        nav.classList.toggle('show');
    }

    // Event listener for the menu toggle button
    menuToggle.addEventListener('click', function() {
        toggleMenu();
    });
});
