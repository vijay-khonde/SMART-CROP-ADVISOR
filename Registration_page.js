// Toggle between login and registration sections
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginSection.classList.add('hidden');
    registerSection.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

// Registration validation
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const regEmail = document.getElementById('regEmail').value.trim();
    const regPassword = document.getElementById('regPassword').value.trim();
    const farmLocation = document.getElementById('farmLocation').value.trim();

    if (!fullName || !regEmail || !regPassword || !farmLocation) {
        alert('Please fill in all fields.');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail)) {
        alert('Please enter a valid email.');
        return;
    }

    if (regPassword.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    alert('Registration successful!');
    registerForm.reset();
    registerSection.classList.add('hidden');
    loginSection.classList.remove('hidden');

    // Redirect to semproject.html after registration
    window.location.href = "semproject.html";
});

// Login validation
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return;
    }

    alert('Login successful!');
    loginForm.reset();

    // Redirect to semproject.html after login
    window.location.href = "semproject.html";
});
