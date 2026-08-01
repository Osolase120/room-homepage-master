const Menu = document.getElementById("Hamburger");
const nav = document.getElementById("nav");

Menu.addEventListener("click", () => {
  Menu.classList.toggle("active");
  nav.classList.toggle("active");
});

const cards = document.querySelectorAll("article");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// Show only the active testimonial
function showArticle(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

// Initial state
showArticle(currentIndex);

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  showArticle(currentIndex);
});

// Previous button
prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  showArticle(currentIndex);
});