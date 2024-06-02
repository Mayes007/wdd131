document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
        // Toggle the 'show' class to display/hide the menu
        menu.classList.toggle('show');
    });
});
