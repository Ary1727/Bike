document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
if (username && email && password) {
        alert('Sign up successful! You can now login.');
        window.location.href = 'login.html';
    } else {
        errorMessage.textContent = 'All fields are required';
        errorMessage.style.display = 'block';
    }
});
