document.addEventListener("DOMContentLoaded", function() {
    const themeSelector = document.querySelector("#theme-selector");

    function changeTheme() {
        const selectedTheme = themeSelector.value;
        const logoImage = document.querySelector("footer img");

        if (selectedTheme === "dark") {
            document.body.classList.add("dark");
            logoImage.src = "white_logo.png";
        } else {
            document.body.classList.remove("dark");
            logoImage.src = "blue_logo.png";
        }
    }

    themeSelector.addEventListener("change", changeTheme);
});
