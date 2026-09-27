import './style.css'
import { createIcons, icons } from "lucide";

createIcons({
  icons,
});
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmblaCarousel from "embla-carousel";

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const quantity = document.getElementById("quantity");

let count = 1;

function updateQuantity() {
    quantity.textContent = count;

    // Disable minus at 1
    minusBtn.disabled = count === 1;

    // Disable plus at 25
    plusBtn.disabled = count === 25;
}

minusBtn.addEventListener("click", function () {
    if (count > 1) {
        count--;
        updateQuantity();
    }
});

plusBtn.addEventListener("click", function () {
    if (count < 25) {
        count++;
        updateQuantity();
    }
});

// Set initial state
updateQuantity();
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");
  } else {
    backToTop.classList.add("hidden");
    backToTop.classList.remove("flex");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});