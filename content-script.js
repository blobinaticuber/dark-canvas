(() => {
  const styleId = "dark-canvas-style";

  if (document.getElementById(styleId)) {
    return;
  }

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    html, body {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }

    a {
      color: #8ab4f8 !important;
    }
  `;

  document.documentElement.appendChild(style);
})();
