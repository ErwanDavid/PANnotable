function setActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
});
