import './style.css'
import { createIcons, icons } from "lucide";

createIcons({
  icons,
});
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmblaCarousel from "embla-carousel";

  const stickyNavbar = document.getElementById("stickyNavbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      stickyNavbar.classList.remove("-translate-y-full", "opacity-0");
      stickyNavbar.classList.add("translate-y-0", "opacity-100");
    } else {
      stickyNavbar.classList.remove("translate-y-0", "opacity-100");
      stickyNavbar.classList.add("-translate-y-full", "opacity-0");
    }
  });

const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");

const countryBtn = document.getElementById("countryBtn");
const countryDropdown = document.getElementById("countryDropdown");


function openDropdown(dropdown) {
  dropdown.classList.remove(
    "invisible",
    "opacity-0",
    "translate-y-2"
  );

  dropdown.classList.add(
    "visible",
    "opacity-100",
    "translate-y-0"
  );
}


function closeDropdown(dropdown) {
  dropdown.classList.add(
    "invisible",
    "opacity-0",
    "translate-y-2"
  );

  dropdown.classList.remove(
    "visible",
    "opacity-100",
    "translate-y-0"
  );
}


// ENGLISH
if (languageBtn && languageDropdown) {

  languageBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      languageDropdown.classList.contains("visible");

    closeDropdown(countryDropdown);

    if (isOpen) {
      closeDropdown(languageDropdown);
    } else {
      openDropdown(languageDropdown);
    }

  });

}


// USD
if (countryBtn && countryDropdown) {

 countryBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      countryDropdown.classList.contains("visible");

    closeDropdown(languageDropdown);

    if (isOpen) {
      closeDropdown(countryDropdown);
    } else {
      openDropdown(countryDropdown);
    }

  });

}


// CLICK OUTSIDE
document.addEventListener("click", () => {

  if (languageDropdown) {
    closeDropdown(languageDropdown);
  }

  if (countryDropdown) {
    closeDropdown(countryDropdown);
  }

});

  const slider = document.getElementById("slider");
  const min = document.getElementById("min");
  const max = document.getElementById("max");
  const range = document.getElementById("range");
  const price = document.getElementById("price");

  function update() {

    let minValue = Number(min.value);
    let maxValue = Number(max.value);

    if (minValue >= maxValue) {
      minValue = maxValue - 10;
      min.value = minValue;
    }

    const left = (minValue / 500) * 100;
    const right = (maxValue / 500) * 100;

    range.style.left = left + "%";
    range.style.width = (right - left) + "%";

    price.textContent = `$${minValue} - $${maxValue}`;
  }


  /* MOVABLE */
  min.addEventListener("input", update);
  max.addEventListener("input", update);


  /* CLICKABLE TRACK */
  slider.addEventListener("click", function (e) {

    // Ignore clicks directly on the handles
    if (
      e.target === min ||
      e.target === max
    ) {
      return;
    }

    const rect = slider.getBoundingClientRect();

    // Click position
    const position = e.clientX - rect.left;

    // Convert click position to price
    let value = Math.round(
      (position / rect.width) * 500 / 10
    ) * 10;

    value = Math.max(0, Math.min(500, value));

    const minValue = Number(min.value);
    const maxValue = Number(max.value);

    // Move whichever handle is closer
    if (
      Math.abs(value - minValue) <=
      Math.abs(value - maxValue)
    ) {
      if (value < maxValue) {
        min.value = value;
      }
    } else {
      if (value > minValue) {
        max.value = value;
      }
    }
    update();
  });

  update();
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const productGrid = document.getElementById("productGrid");

// Extra content that should appear only in List View
const listOnly = document.querySelectorAll(".list-only");


// ===============================
// GRID BUTTON
// ===============================

gridBtn.addEventListener("click", function () {

  // Grid layout
  productGrid.classList.add("md:grid-cols-2");
  productGrid.classList.add("xl:grid-cols-3");

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(function (card) {

    const imageBox = card.querySelector(".product-image-wrapper");

    // Grid = image on top, content underneath
    card.classList.remove(
      "md:flex-row",
      "md:min-h-[400px]"
    );

    card.classList.add("flex-col");

    if (imageBox) {
      // Remove List-view image sizing
      imageBox.classList.remove(
        "md:h-[400px]",
        "md:w-1/2"
      );
    }

  });

  // Hide List-only content
  listOnly.forEach(function (item) {
    item.classList.add("hidden");
  });

  // Grid button active
  gridBtn.classList.remove("border-gray-200");
  gridBtn.classList.add("border-black");

  // List button inactive
  listBtn.classList.remove("border-black");
  listBtn.classList.add("border-gray-200");

});
// ===============================
// LIST BUTTON
// ===============================

listBtn.addEventListener("click", function () {

  // List = one column
  productGrid.classList.remove("md:grid-cols-2");
  productGrid.classList.remove("xl:grid-cols-3");

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(function (card) {

    const imageBox = card.querySelector(".product-image-wrapper");

    // Mobile = image on top
    // md and above = image left, content right
    card.classList.add("flex-col");
    card.classList.add("md:flex-row", "md:min-h-[400px]");
    card.classList.add("min-w-0");

    if (imageBox) {

      imageBox.classList.add(
        "md:h-[400px]",
        "md:w-1/2"
      );

    }

  });

  // Show List-only content
  listOnly.forEach(function (item) {
    item.classList.remove("hidden");
  });

  // List button active
  listBtn.classList.remove("border-gray-200");
  listBtn.classList.add("border-black");

  // Grid button inactive
  gridBtn.classList.remove("border-black");
  gridBtn.classList.add("border-gray-200");

});

const sortBtn = document.getElementById("sortBtn");
const sortDropdown = document.getElementById("sortDropdown");
const sortArrow = document.getElementById("sortArrow");
const sortText = document.getElementById("sortText");

sortBtn.addEventListener("click", () => {

  sortDropdown.classList.toggle("hidden");

  if (sortDropdown.classList.contains("hidden")) {
    sortArrow.classList.remove("fa-chevron-up");
    sortArrow.classList.add("fa-chevron-down");
  } else {
    sortArrow.classList.remove("fa-chevron-down");
    sortArrow.classList.add("fa-chevron-up");
  }

});

const mainAside = document.getElementById("mainAside");
const drawerFilterContent = document.getElementById("drawerFilterContent");

const filterBtn = document.getElementById("filterBtn");
const filterDrawer = document.getElementById("filterDrawer");
const closeFilter = document.getElementById("closeFilter");
const filterOverlay = document.getElementById("filterOverlay");


// Copy the existing aside contents into the drawer
drawerFilterContent.innerHTML = mainAside.innerHTML;


// Open drawer
filterBtn.addEventListener("click", () => {
  filterDrawer.classList.remove("-translate-x-full");
  filterDrawer.classList.add("translate-x-0");

  filterOverlay.classList.remove("hidden");
});


// Close drawer
closeFilter.addEventListener("click", () => {
  filterDrawer.classList.remove("translate-x-0");
  filterDrawer.classList.add("-translate-x-full");

  filterOverlay.classList.add("hidden");
});


// Close when clicking dark overlay
filterOverlay.addEventListener("click", () => {
  filterDrawer.classList.remove("translate-x-0");
  filterDrawer.classList.add("-translate-x-full");

  filterOverlay.classList.add("hidden");
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");
  } else {
    backToTop.classList.remove("flex");
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});