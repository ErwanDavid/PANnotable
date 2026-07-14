function renderHeader() {
  const header = document.querySelector("header.site-header");
  if (!header) return;

  const isSubDir = window.location.pathname.includes("/cas/") || window.location.pathname.includes("/analyse/") || window.location.pathname.includes("/bibliographie/");
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
          <li><a class="nav-link" data-page="analyse" href="${base}analyse.html">Analyse de données</a></li>
          <li><a class="nav-link" data-page="cases"   href="${base}cases.html">Liste des cas</a></li>
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
  enableImageZoom();
});

function enableImageZoom() {
  // create modal element
  const modal = document.createElement('div');
  modal.id = 'image-modal';
  modal.innerHTML = '<div class="inner"><img src="#" alt="" /><div class="caption"></div></div>';
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');
  const caption = modal.querySelector('.caption');

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    caption.textContent = alt || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '#';
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalImg) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // attach to anchors with class 'zoom'
  document.querySelectorAll('a.zoom').forEach(a => {
    a.addEventListener('click', (e) => {
      // allow ctrl/cmd or middle-click to open in new tab
      if (e.ctrlKey || e.metaKey || e.button === 1) return;
      e.preventDefault();
      const img = a.querySelector('img');
      const src = a.href || (img && img.src);
      const alt = (img && img.alt) || '';
      openModal(src, alt);
    });
  });
}

