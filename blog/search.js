// search.js

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const projects = document.querySelectorAll(".project");

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();

    projects.forEach((project) => {
      const title = project.querySelector("h3").textContent.toLowerCase();
      const description = project.querySelector("p").textContent.toLowerCase();

            const isVisible = title.includes(term) || description.includes(term);
            project.style.display = isVisible ? "" : "none";
          });
        });
      });
