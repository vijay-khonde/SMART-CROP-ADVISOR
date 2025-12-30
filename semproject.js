/* ================================
   🌱 SMART CROP ADVISOR - SEMPROJECT.JS
   ================================ */

/* ================================
   UI Section Toggle
=============================== */
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const dashboardSection = document.getElementById('dashboardSection');
const featuresSection = document.getElementById('featuresSection');

function showSection(section) {
    [loginSection, registerSection, dashboardSection, featuresSection].forEach(s => s?.classList.add('hidden'));
    if (section === 'login') loginSection.classList.remove('hidden');
    if (section === 'register') registerSection.classList.remove('hidden');
    if (section === 'dashboard') dashboardSection.classList.remove('hidden');
    if (section === 'features') featuresSection.classList.remove('hidden');
}

/* ================================
   Notifications
=============================== */
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

function showNotification(msg) {
    notificationText.textContent = msg;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}

/* ================================
   Auth System (Login / Register)
=============================== */
document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showSection('dashboard');
    showNotification('Login successful! Welcome back 👨‍🌾');
});

document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const farmLocation = document.getElementById("farmLocation").value.trim();

    // Basic validation
    if (!fullName || !email || !password || !farmLocation) {
        alert("Please fill in all fields!");
        return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert("Email already registered! Try logging in.");
        return;
    }

    // Save user
    users.push({ fullName, email, password, farmLocation });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    document.getElementById("registerForm").reset();

    // Redirect to login
    showSection('login');
    showNotification('Registration successful! Please log in ✅');
});

/* ================================
   Crop Recommendations
=============================== */
document.getElementById('recommendationForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const crop = document.getElementById("cropType").value;
    const soil = document.getElementById("soilType").value;
    const season = document.getElementById("season").value;

    const resultBox = document.getElementById("recommendationResult");
    resultBox.textContent = "⏳ Generating AI-based farming guidance...";

    const prompt = `
You are an expert agricultural advisor.

Provide clear, point-wise farming recommendations for:
Crop: ${crop}
Soil Type: ${soil}
Season: ${season}

Include:
1. Best farming practices
2. Irrigation guidance
3. Fertilizer suggestions
4. Disease & pest prevention
5. Seasonal precautions

Use simple language suitable for Indian farmers.
`;

    try {
        const response = await model.generateContent(prompt); // Keep API call as is
        resultBox.textContent = response.response.text();
    } catch (err) {
        resultBox.textContent = "❌ Error generating recommendations.";
        console.error(err);
    }
});
