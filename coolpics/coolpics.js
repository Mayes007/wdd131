// JavaScript functionality can be added here as needed
// For example, toggling the menu button to show/hide navigation links
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});
