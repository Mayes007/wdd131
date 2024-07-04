document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', () => {
      menu.classList.toggle('show');
  });

  function handleResize() {
      if (window.innerWidth > 1000) {
          menu.classList.remove('hide');
      } else {
          menu.classList.add('hide');
      }
  }

  handleResize();
  window.addEventListener('resize', handleResize);
});
function viewerTemplate(src, alt) {
  return `
      <div class="viewer">
          <button class="close-viewer">X</button>
          <img src="${src}" alt="${alt}">
      </div>
  `;
}

function viewHandler(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName.toLowerCase() === 'img') {
      const src = clickedElement.src.replace('-sm', '-full');
      const alt = clickedElement.alt;
      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));
      document.querySelector(".close-viewer").addEventListener("click", closeViewer);
  }
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
