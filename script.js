/*Logo Carousel Section*/
document.addEventListener("DOMContentLoaded", function () {
  const tooltipElements = document.querySelectorAll("[data-tooltip]");
  tooltipElements.forEach((element) => {
    let tooltip = null;
    let timeout;
    element.addEventListener("mouseenter", function () {
      tooltip = document.createElement("div");
      tooltip.className = "custom-tooltip";
      tooltip.textContent = this.getAttribute("data-tooltip");
      const rect = this.getBoundingClientRect();
      tooltip.style.position = "absolute";
      tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
      tooltip.style.top = `${rect.top + window.scrollY - 40}px`;
      tooltip.style.transform = "translateX(-50%)";
      document.body.appendChild(tooltip);
      tooltip.style.opacity = "0";
      timeout = setTimeout(() => {
        tooltip.style.opacity = "1";
        tooltip.style.transition = "opacity 0.2s ease";
      }, 100);
    });
    element.addEventListener("mouseleave", function () {
      if (tooltip) {
        tooltip.style.opacity = "0";
        setTimeout(() => {
          if (tooltip && tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
          }
        }, 200);
      }
      clearTimeout(timeout);
    });
  });
  const track = document.querySelector(".carousel-track");
  if (track) {
    track.addEventListener("mouseenter", () => {
      track.style.animationPlayState = "paused";
    });
    track.addEventListener("mouseleave", () => {
      track.style.animationPlayState = "running";
    });
    const slides = document.querySelectorAll(".carousel-slide");
    if (slides.length > 0) {
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    }
  }
});

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
