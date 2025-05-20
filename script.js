document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (name && email && message) {
    document.getElementById('formResponse').textContent =
      'Thanks for reaching out! I’ll get back to you soon.';
    e.target.reset();
  } else {
    document.getElementById('formResponse').textContent =
      'Please fill out all fields.';
  }
});
