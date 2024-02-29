// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', function(e) {
  let messages = [];

  if (nameInput.value === '' || nameInput.value == null) {
    messages.push('Name is required');
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    messages.push('Invalid email format');
  }
  if (phoneInput.value === '' || phoneInput.value === null) {
    messages.push('Phone Number is required');
  } else {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phoneInput.value)) {
      messages.push('Invalid phone number format (e.g., 123-456-7890)');
    }
  }
}