document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const usernameInput = document.getElementById('username');
  
    submitButton.addEventListener('click', function () {
      const username = usernameInput.value.trim();
  
      if (username !== '') {
        localStorage.setItem('username', username);
        window.location.href = 'thanks.html';
      } else {
        alert('Please enter your name.');
      }
    });
  });
  