document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const modal = document.getElementById("success-modal");
  const closeBtn = document.querySelector(".close-btn");
  const consent = document.getElementById("consent");
  const errorMsg = document.getElementById("consent-error");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Dölj tidigare fel om synligt
    if (errorMsg) errorMsg.style.display = "none";

    // Kontrollera att checkbox finns och är ikryssad
    if (!consent || !consent.checked) {
      if (errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (consent) consent.focus();
      return;
    }

    // Allt ok — visa modal och nollställ formuläret
    if (modal) modal.style.display = "flex";
    form.reset();
  });

  // Dölj felmeddelandet direkt när användaren kryssar i rutan
  if (consent && errorMsg) {
    consent.addEventListener("change", () => {
      if (consent.checked) errorMsg.style.display = "none";
    });
  }

  // Stäng modal på X
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (modal) modal.style.display = "none";
    });
  }

  // Stäng modal när man klickar utanför innehållet
  window.addEventListener("click", (e) => {
    if (modal && e.target === modal) modal.style.display = "none";
  });
});

  //hamburgarmeny
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
