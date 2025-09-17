
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".timeline-step");

    steps.forEach(step => {
      step.addEventListener("click", function () {
        // Agar already active hai to remove karo
        if (this.classList.contains("active")) {
          this.classList.remove("active");
        } else {
          // Baaki sab close kar do
          steps.forEach(s => s.classList.remove("active"));
          this.classList.add("active");
        }
      });
    });
  });