function displayGreeting() {
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function validateContactForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,6}$/;
  const phonePattern = /^[0-9]{10}$/;

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (phone && !phone.match(phonePattern)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}
