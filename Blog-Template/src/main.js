import './style.css'

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");
const navLinks = document.getElementById("navLinks");

searchBtn.addEventListener("click", function () {
  searchBar.classList.toggle("hidden");
  closeSearch.classList.remove("hidden");
  searchBtn.classList.add("hidden");

  if (window.innerWidth < 768) {
    navLinks.classList.toggle("hidden");
  }
});

closeSearch.addEventListener("click", function () {
  searchBar.classList.add("hidden");
  closeSearch.classList.add("hidden");
  searchBtn.classList.remove("hidden");

  if (window.innerWidth < 768) {
    navLinks.classList.remove("hidden");
  }
});
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slides = carousel.children;

let currentSlide = 0;

function showSlide() {
  const slideWidth = slides[0].getBoundingClientRect().width;

  carousel.style.transform =
    `translateX(-${currentSlide * slideWidth}px)`;
}

nextBtn.addEventListener("click", function () {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  showSlide();
});

prevBtn.addEventListener("click", function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }

  showSlide();
});

window.addEventListener("resize", showSlide);

const downArrow = document.getElementById("downArrow");
const topArrow = document.getElementById("topArrow");

const flora = document.getElementById("flora");
const photography = document.getElementById("photography");
const creatures = document.getElementById("creatures");
const adventures = document.getElementById("adventures");

downArrow.addEventListener("click", () => {
  flora.classList.remove("hidden");
  photography.classList.remove("hidden");
  creatures.classList.remove("hidden");
  adventures.classList.remove("hidden");

  downArrow.classList.add("hidden");
  topArrow.classList.remove("hidden");
});

topArrow.addEventListener("click", () => {
  flora.classList.add("hidden");
  photography.classList.add("hidden");
  creatures.classList.add("hidden");
  adventures.classList.add("hidden");

  topArrow.classList.add("hidden");
  downArrow.classList.remove("hidden");
});
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});