document.addEventListener('DOMContentLoaded', function () {
    const storedUsername = localStorage.getItem('username');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    if (storedUsername) {
      confirmationMessage.textContent = `Hello, ${storedUsername}! Please do attend the party because "YOUR PRESENCE MATTERS"`;
    } else {
      confirmationMessage.textContent = 'No name found in localStorage.';
    }
  });
  