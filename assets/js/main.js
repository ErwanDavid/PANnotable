function renderHeader() {
  const header = document.querySelector("header.site-header");
  if (!header) return;

  const isSubDir = window.location.pathname.includes("/cas/");
  const base = isSubDir ? "../" : "";

  header.innerHTML = `
    <div class="top-bar">
      <div class="brand">
        <img src="${base}assets/images/UFO_icon.png" alt="UFO icon" style="height:1.4em;vertical-align:middle;margin-right:0.4em;" />
        PAN Notables
      </div>
      <nav>
        <ul>
          <li><a class="nav-link" data-page="home"    href="${base}index.html">Accueil</a></li>
          <li><a class="nav-link" data-page="cases"   href="${base}cases.html">Liste des cas</a></li>
          <li><a class="nav-link" data-page="sources" href="${base}sources.html">Sources</a></li>
          <li><a class="nav-link" data-page="analyse" href="${base}analyse.html">Analyse de données</a></li>
          <li><a class="nav-link" data-page="books"   href="${base}bibliographie.html">Bibliographie</a></li>
        </ul>
      </nav>
    </div>
  `;
}

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
  renderHeader();
  setActiveNav();
});

