// app.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementsByClassName('my-login-validation');
  
    loginForm.addEventListener('submit', function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Here you can add any additional logic before redirection
  
      // Redirect to the next page
      window.location.href = 'user.html';
    });
  });
  