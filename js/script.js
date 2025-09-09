document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const modal = document.getElementById("success-modal");
  const closeBtn = document.querySelector(".close-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // visa modal
      modal.style.display = "flex";

      // töm fältet
      form.reset();
    });
  }

  // stäng på X
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // stäng om man klickar utanför modal-content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
