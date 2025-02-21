console.log("Hello World");

const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
  console.log("Form submitted"); // Log when the form is submitted
  e.preventDefault(); // Prevent the default form submission

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;

  // Redirect to success.html
  window.location.href = './success.html';
});