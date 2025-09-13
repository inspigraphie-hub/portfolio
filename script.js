// Recherche en direct
const searchInput = document.getElementById("search");
const posters = document.querySelectorAll(".poster");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  posters.forEach(poster => {
    const alt = poster.querySelector("img").alt.toLowerCase();
    poster.style.display = alt.includes(value) ? "block" : "none";
  });
});

// Modal (fiche affiche)
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="modal-img" src="" alt="">
    <h2 id="modal-title"></h2>
    <p id="modal-details"></p>
  </div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const closeBtn = modal.querySelector(".close");

// Quand on clique sur un poster → ouvrir modal
posters.forEach(poster => {
  poster.addEventListener("click", () => {
    const img = poster.querySelector("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = img.alt;
    modalDetails.textContent = "Détails personnalisés pour " + img.alt; // 👉 tu peux modifier ça
    modal.style.display = "flex";
  });
});

// Fermer modal quand on clique sur X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fermer modal si on clique à l'extérieur
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Si on clique sur l'image dans la modal → ouvrir seule
modalImg.addEventListener("click", () => {
  window.open(modalImg.src, "_blank");
});
