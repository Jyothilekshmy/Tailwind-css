import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");
const navLinks = document.getElementById("navLinks");
const blogName = document.getElementById("blogName");

if (searchBtn && searchBar && closeSearch) {

  searchBtn.addEventListener("click", function () {

    searchBar.classList.remove("hidden");
    closeSearch.classList.remove("hidden");
    searchBtn.classList.add("hidden");

    if (window.innerWidth < 768) {
      navLinks?.classList.add("hidden");
      blogName?.classList.add("hidden");
    }

  });

  closeSearch.addEventListener("click", function () {

    searchBar.classList.add("hidden");
    closeSearch.classList.add("hidden");
    searchBtn.classList.remove("hidden");

    if (window.innerWidth < 768) {
      navLinks?.classList.remove("hidden");
      blogName?.classList.remove("hidden");
    }

  });

}


const trendingText = document.getElementById("trendingText");
const prevTrending = document.getElementById("prevTrending");
const nextTrending = document.getElementById("nextTrending");

const trendingNews = [
  "Tokyo: Why everyone is booking trips to Tokyo this season—unbeatable street food, cherry blossoms, and tech culture!",
  "Kerala: Explore the peaceful backwaters, beautiful beaches, and traditional village life!",
  "Paris: Discover hidden cafés, beautiful streets, iconic architecture, and unforgettable experiences!",
  "Bali: From stunning beaches to peaceful temples—here's why Bali is on everyone's travel list!",
  "Switzerland: Experience breathtaking mountains, scenic train rides, and charming alpine villages!"
];

let currentTrending = 0;

function showTrending(index) {

  if (!trendingText) return;

  trendingText.textContent = trendingNews[index];

}


if (prevTrending && nextTrending) {

  prevTrending.addEventListener("click", () => {

    currentTrending--;

    if (currentTrending < 0) {
      currentTrending = trendingNews.length - 1;
    }

    showTrending(currentTrending);

  });


  nextTrending.addEventListener("click", () => {

    currentTrending++;

    if (currentTrending >= trendingNews.length) {
      currentTrending = 0;
    }

    showTrending(currentTrending);

  });

}


const downArrow = document.getElementById("downArrow");
const topArrow = document.getElementById("topArrow");

const flora = document.getElementById("flora");
const photography = document.getElementById("photography");
const creatures = document.getElementById("creatures");
const adventures = document.getElementById("adventures");


if (
  downArrow &&
  topArrow &&
  flora &&
  photography &&
  creatures &&
  adventures
) {

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

}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuPanel = document.getElementById("menuPanel");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("invisible", "opacity-0");
  mobileMenu.classList.add("opacity-100");

  menuPanel.classList.remove("translate-x-full");
  menuPanel.classList.add("translate-x-0");

  menuBtn.classList.add("hidden");
});

const mobileHomeBtn = document.getElementById("mobileHomeBtn");
const mobileHomeDropdown = document.getElementById("mobileHomeDropdown");

if (mobileHomeBtn && mobileHomeDropdown) {
  mobileHomeBtn.addEventListener("click", () => {
    mobileHomeDropdown.classList.toggle("hidden");
  });
}

const mobilePagesBtn = document.getElementById("mobilePagesBtn");
const mobilePagesDropdown = document.getElementById("mobilePagesDropdown");

if (mobilePagesBtn && mobilePagesDropdown) {
  mobilePagesBtn.addEventListener("click", () => {
    mobilePagesDropdown.classList.toggle("hidden");
  });
}
const mobilePostBtn = document.getElementById("mobilePostBtn");
const mobilePostDropdown = document.getElementById("mobilePostDropdown");

if (mobilePostBtn && mobilePostDropdown) {
  mobilePostBtn.addEventListener("click", () => {
    mobilePostDropdown.classList.toggle("hidden");
  });
}

function closeMobileMenu() {
  menuPanel.classList.remove("translate-x-0");
  menuPanel.classList.add("translate-x-full");

  mobileMenu.classList.remove("opacity-100");
  mobileMenu.classList.add("opacity-0");

  menuBtn.classList.remove("hidden");

  setTimeout(() => {
    mobileMenu.classList.add("invisible");
  }, 300);
}

closeMenu.addEventListener("click", closeMobileMenu);
menuOverlay.addEventListener("click", closeMobileMenu);

const loadMoreBtn = document.getElementById("loadMoreBtn");
const morePosts = document.querySelectorAll(".more-post");
const loadMoreText = document.getElementById("loadMoreText");
const loadMoreIcon = document.getElementById("loadMoreIcon");

if (loadMoreBtn && morePosts.length > 0) {

  loadMoreBtn.addEventListener("click", function () {

    const isHidden = morePosts[0].classList.contains("hidden");

    morePosts.forEach(function (post) {

      if (isHidden) {

        post.classList.remove("hidden");

      } else {

        post.classList.add("hidden");

      }

    });

    if (isHidden) {

      loadMoreText.textContent = "View Less Posts";

      loadMoreIcon.classList.remove("fa-chevron-down");
      loadMoreIcon.classList.add("fa-chevron-up");

    } else {

      loadMoreText.textContent = "Load More Posts";

      loadMoreIcon.classList.remove("fa-chevron-up");
      loadMoreIcon.classList.add("fa-chevron-down");

    }

  });

}
const newsCarousel = document.getElementById("newsCarousel");
const newsNextBtn = document.getElementById("nextBtn");
const newsPrevBtn = document.getElementById("prevBtn");

let isMoving = false;
function getMoveAmount() {
  return window.innerWidth >= 1024 ? 25 : 100;
}

newsNextBtn.addEventListener("click", () => {

  if (isMoving) return;

  isMoving = true;

  const moveAmount = getMoveAmount();

  newsCarousel.style.transition = "transform 600ms ease-in-out";
  newsCarousel.style.transform = `translateX(-${moveAmount}%)`;

  newsCarousel.addEventListener("transitionend", () => {
    newsCarousel.appendChild(newsCarousel.firstElementChild);
    newsCarousel.style.transition = "none";
    newsCarousel.style.transform = "translateX(0)";
    newsCarousel.offsetHeight;

    isMoving = false;

  }, { once: true });

});



newsPrevBtn.addEventListener("click", () => {

  if (isMoving) return;

  isMoving = true;

  const moveAmount = getMoveAmount();

  
  newsCarousel.style.transition = "none";
  newsCarousel.insertBefore(
    newsCarousel.lastElementChild,
    newsCarousel.firstElementChild
  );

  
  newsCarousel.style.transform = `translateX(-${moveAmount}%)`;

  
  newsCarousel.offsetHeight;

  
  newsCarousel.style.transition = "transform 600ms ease-in-out";
  newsCarousel.style.transform = "translateX(0)";

  newsCarousel.addEventListener("transitionend", () => {
    isMoving = false;
  }, { once: true });

});