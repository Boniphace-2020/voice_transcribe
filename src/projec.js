document.addEventListener("DOMContentLoaded", () => {
  // Optional: Smooth scrolling for internal nav links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: Sign-up button interaction
  const signUpButton = document.querySelector(".cta");
  signUpButton.addEventListener("click", () => {
    alert("Thanks for signing up! We'll contact you soon.");
    // Or redirect: window.location.href = "signup.html";
  });

  // You can add more JS here, like animations or mobile nav toggle
});
