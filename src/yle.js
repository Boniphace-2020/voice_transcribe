// Simple client-side validation for the contact form and booking form
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input, select, textarea");
      let valid = true;

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          valid = false;
          input.style.border = "2px solid red"; // Highlight invalid field
        } else {
          input.style.border = "1px solid #ccc"; // Normal border if valid
        }
      });

      if (!valid) {
        e.preventDefault(); // Prevent form submission if invalid
        alert("Please fill out all required fields correctly.");
      }
    });
  });
});
// Toggle menu for mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
