"use strict";

const btnScrollTo2 = document.querySelector(".btn--scroll-to2");
const btnScrollTo3 = document.querySelector(".btn--scroll-to3");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

btnScrollTo2.addEventListener("click", function (e) {
  section2.scrollIntoView({ behavior: "smooth" });
});
btnScrollTo3.addEventListener("click", function (e) {
  section3.scrollIntoView({ behavior: "smooth" });
});
/////////////////////
/////////////////////
/////////////////////
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/////////////////////
/////////////////////
/////////////////////
const nav = document.querySelector(".nav");
const section1 = document.querySelector(".section-1");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const section1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

section1Observer.observe(section1);

//Header thanh dieu huong
// function toggleMenu() {
//   const nav = document.querySelector('.hr_nav');
//   nav.classList.toggle('open');
// }

window.onbeforeunload = function () {
  window.scrollTo(0, 0); // Cuộn lên đầu khi reload
};

window.onload = function () {
  window.scrollTo(0, 0); // Cuộn lên đầu trang sau khi tải xong
};
