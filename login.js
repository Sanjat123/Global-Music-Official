// Registration Form Handler
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Check if passwords match
    if (formData.get('password') !== formData.get('confirm_password')) {
        alert('Passwords do not match!');
        return;
    }
    
    fetch('php/register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || data.error);
        if (data.message) {
            window.location.href = 'login.html';
        }
    })
    .catch(error => console.error('Error:', error));
});

// Login Form Handler
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('php/login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.message);
            window.location.href = data.redirect || 'index.html';
        }
    })
    .catch(error => console.error('Error:', error));
});

// Check authentication status on page load
function checkAuth() {
    fetch('php/check_auth.php')
        .then(response => response.json())
        .then(data => {
            if (!data.authenticated && !window.location.pathname.includes('login.html') && !window.location.pathname.includes('register.html')) {
                window.location.href = 'login.html';
            }
        });
}

// Call checkAuth when page loads
document.addEventListener('DOMContentLoaded', checkAuth);