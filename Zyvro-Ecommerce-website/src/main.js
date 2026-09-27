import './style.css'
import { createIcons, icons } from "lucide";

createIcons({
  icons,
});
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmblaCarousel from "embla-carousel";
const navInner = document.getElementById("navInner");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navInner.classList.remove("h-25");
    navInner.classList.add("h-[70px]");
  } else {
    navInner.classList.remove("h-[70px]");
    navInner.classList.add("h-25");
  }
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});
const submenuButtons = document.querySelectorAll(".mobile-submenu-btn");

submenuButtons.forEach((button) => {
  button.addEventListener("click", function () {

    const targetId = this.dataset.target;
    const submenu = document.getElementById(targetId);
    const icon = this.querySelector("i");

    if (!submenu) return;

    if (submenu.classList.contains("grid-rows-[0fr]")) {

      // OPEN
      submenu.classList.remove("grid-rows-[0fr]", "opacity-0");
      submenu.classList.add("grid-rows-[1fr]", "opacity-100");

      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");

    } else {

      // CLOSE
      submenu.classList.remove("grid-rows-[1fr]", "opacity-100");
      submenu.classList.add("grid-rows-[0fr]", "opacity-0");

      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

let currentSlide = 0;
let autoplayTimer;

function showSlide(index) {
  heroSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    }
  });

  heroDots.forEach((dot, i) => {
    if (i === index) {
      // Active
      dot.classList.remove("bg-white");
      dot.classList.add("bg-black");

    } else {

      // Inactive
      dot.classList.remove("bg-black");
      dot.classList.add("bg-white");

    }

  });


  currentSlide = index;
}


// ==============================
// DOT CLICK
// ==============================

heroDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showSlide(index);

    restartAutoplay();

  });

});


// ==============================
// AUTOPLAY
// ==============================

function startAutoplay() {

  autoplayTimer = setInterval(() => {

    const nextSlide =
      (currentSlide + 1) % heroSlides.length;

    showSlide(nextSlide);

  }, 7000);

}


// ==============================
// RESTART AUTOPLAY
// ==============================

function restartAutoplay() {

  clearInterval(autoplayTimer);

  startAutoplay();

}


// ==============================
// START
// ==============================

if (heroSlides.length > 0) {

  showSlide(0);

  startAutoplay();

}

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('[data-color-swatch]').forEach((button) => {

    // HOVER
    button.addEventListener('mouseenter', () => {

      const card = button.closest('.product-card');
      if (!card) return;

      const src = button.getAttribute('data-image');
      const mainImg = card.querySelector('.product-image');

      if (mainImg && src) {
        mainImg.src = src;
      }

      // Make all rings gray
      card.querySelectorAll('.color-ring').forEach((ring) => {
        ring.classList.remove('border-black');
        ring.classList.add('border-gray-400');
      });

      // Make hovered ring black
      button.classList.remove('border-gray-400');
      button.classList.add('border-black');

    });

    // CLICK
    button.addEventListener('click', () => {

      const card = button.closest('.product-card');
      if (!card) return;

      const src = button.getAttribute('data-image');
      const mainImg = card.querySelector('.product-image');

      if (mainImg && src) {
        mainImg.src = src;
      }

      // Make all rings gray
      card.querySelectorAll('.color-ring').forEach((ring) => {
        ring.classList.remove('border-black');
        ring.classList.add('border-gray-400');
      });

      // Keep clicked ring black
      button.classList.remove('border-gray-400');
      button.classList.add('border-black');

    });

  });

});

document.querySelectorAll('.product-card').forEach((card) => {

  const mainImg = card.querySelector('.product-image');

  if (!mainImg) return;

  const originalImage = mainImg.src;
  const hoverImage = mainImg.getAttribute('data-hover-image');

  if (!hoverImage) return;

  card.addEventListener('mouseenter', () => {

    mainImg.style.opacity = '0';

    setTimeout(() => {
      mainImg.src = hoverImage;
      mainImg.style.opacity = '1';
    }, 300);

  });

  card.addEventListener('mouseleave', () => {

    mainImg.style.opacity = '0';

    setTimeout(() => {
      mainImg.src = originalImage;
      mainImg.style.opacity = '1';
    }, 300);

  });

});
// ==============================
// REVIEW CAROUSEL
// ==============================

const reviewTrack = document.getElementById("reviewTrack");
const reviewDots = document.querySelectorAll(".review-dot");

let reviewCurrentSlide = 0;
let reviewAutoSlide;



function moveReviewCarousel(index) {

  if (!reviewTrack) return;

  const cards = reviewTrack.children;

  if (!cards.length) return;

  const cardWidth = cards[0].getBoundingClientRect().width;

  reviewCurrentSlide = index;

  reviewTrack.style.transform =
    `translate3d(-${cardWidth * index}px, 0, 0)`;


  // Update dots
  reviewDots.forEach((dot, i) => {

    if (i === index) {

      dot.classList.remove("bg-gray-300");
      dot.classList.add("bg-black");

    } else {

      dot.classList.remove("bg-black");
      dot.classList.add("bg-gray-300");

    }

  });

}


reviewDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    moveReviewCarousel(index);

    restartReviewAutoplay();

  });

});



function startReviewAutoplay() {

  reviewAutoSlide = setInterval(() => {

    reviewCurrentSlide++;

    if (reviewCurrentSlide > 3) {
      reviewCurrentSlide = 0;
    }

    moveReviewCarousel(reviewCurrentSlide);

  }, 4000);

}

function restartReviewAutoplay() {

  clearInterval(reviewAutoSlide);

  startReviewAutoplay();

}


if (reviewTrack && reviewDots.length > 0) {

  moveReviewCarousel(0);

  startReviewAutoplay();

}




window.addEventListener("resize", () => {

  moveReviewCarousel(reviewCurrentSlide);

});

const sections = document.querySelectorAll('[data-parallax]');

function updateParallax(){
  sections.forEach(section => {
    const bg = section.querySelector('[data-parallax-bg]');
    const rect = section.getBoundingClientRect();
    // only calculate while the section is anywhere near the viewport
    if (rect.bottom >= 0 && rect.top <= window.innerHeight){
      const speed = 0.4; // 0 = bg fixed in place, 1 = bg moves same speed as page (no effect)
      const offset = rect.top * speed;
      bg.style.transform = `translateY(${offset}px)`;
    }
  });
}

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', updateParallax);
updateParallax();
const carousel = document.getElementById("featuredCarousel");
const originalCards = [...carousel.querySelectorAll(".featured-card")];

let currentIndex = 0;
let cardWidth = 0;
let gap = 24;

// Clone the 3 cards
originalCards.forEach(card => {
  const clone = card.cloneNode(true);
  carousel.appendChild(clone);
});

// Calculate card width
function updateSize() {
  const card = carousel.querySelector(".featured-card");

  cardWidth = card.offsetWidth;
  gap = 24;
}

updateSize();

window.addEventListener("resize", updateSize);


// Move one card
function moveCarousel() {

  currentIndex++;

  carousel.style.transition = "transform 700ms ease-in-out";

  carousel.style.transform =
    `translateX(-${currentIndex * (cardWidth + gap)}px)`;


  // After the cloned cards
  if (currentIndex === originalCards.length) {

    setTimeout(() => {

      carousel.style.transition = "none";

      currentIndex = 0;

      carousel.style.transform = "translateX(0)";

    }, 700);
  }
}


// Auto move
setInterval(moveCarousel, 2500);
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {

    navInner.classList.remove("h-25");
    navInner.classList.add("h-[70px]");

    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");

  } else {

    navInner.classList.remove("h-[70px]");
    navInner.classList.add("h-25");

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





