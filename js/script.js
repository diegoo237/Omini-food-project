const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const heroEl = document.querySelector(".hero-section");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const selectionEl = document.querySelector(href);
      selectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroEl);
