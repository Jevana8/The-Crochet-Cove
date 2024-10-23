// Constants for sample login credentials
const SAMPLE_USERNAME = "user123@gmail.com";
const SAMPLE_PASSWORD = "password123"; // Password with at least 8 characters

// Get form elements
const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

// Track login attempts
let loginAttempts = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  let errors = [];

  // Check if firstname_input exists to determine if it's a signup form
  if (firstname_input) {
    // Signup form logic
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    
    // If no errors, you can handle successful signup logic here (e.g., store user data, etc.)
    if (errors.length === 0) {
      // Redirect to a welcome or products page after signup (or handle as needed)
      alert("Signup successful! Redirecting to products page...");
      window.location.href = 'products.html'; // Change to your desired page
    }
  } else {
    // Login form logic
    errors = getLoginFormErrors(email_input.value, password_input.value);
    
    // Check if login credentials match
    if (errors.length === 0 && email_input.value === SAMPLE_USERNAME && password_input.value === SAMPLE_PASSWORD) {
      // Redirect to products page on successful login
      window.location.href = 'products.html';
    } else {
      loginAttempts++;
      if (loginAttempts >= 3) {
        // Redirect to error page after 3 failed login attempts
        window.location.href = 'error.html';
      } else {
        errors.push('Incorrect username or password');
      }
    }
  }

  // Display errors if they exist
  if (errors.length > 0) {
    error_message.innerText = errors.join(". ");
  }
});

// Function to handle signup form errors
function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];
  // Validation logic for signup
  if (firstname === '' || firstname == null) {
    errors.push('Firstname is required');
    firstname_input.parentElement.classList.add('incorrect');
  }
  if (email === '' || email == null) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password.length < 8) {
    errors.push('Password must have at least 8 characters');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password !== repeatPassword) {
    errors.push('Password does not match repeated password');
    password_input.parentElement.classList.add('incorrect');
    repeat_password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Function to handle login form errors
function getLoginFormErrors(email, password) {
  let errors = [];
  // Validation logic for login
  if (email === '' || email == null) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Reset error styling on input change
const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
      error_message.innerText = '';
    }
  });
});
