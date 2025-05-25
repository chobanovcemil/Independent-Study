/*Menu Highlighter*/
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition < 100) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    document
      .querySelector('.nav-link[href="./index.html"]')
      .classList.add("active");
    return;
  }
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.hash === "" ||
    window.location.hash === "#announcementCarousel"
  ) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    document
      .querySelector('.nav-link[href="#announcementCarousel"]')
      .classList.add("active");
  }
});

/*Navigation Scroller*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
document.querySelectorAll('.nav-link:not([href="#"])').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/*Home Link Reloader*/
document
  .querySelector('.nav-link[href="#"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
  });
