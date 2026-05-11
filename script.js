// --- 1. DATE & TIME ---
function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    if (dateTimeElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
        };
        dateTimeElement.textContent = now.toLocaleDateString(undefined, options);
    }
}

// --- 2. LOGIN & LOGOUT LOGIC ---
const loginForm = document.getElementById('loginForm');
const portalContent = document.getElementById('portal-content');
const welcomeContainer = document.getElementById('welcome-container');
const userDisplay = document.getElementById('user-display');
const logoutBtn = document.getElementById('logoutBtn');
const logoutNotice = document.getElementById('logout-notice');
const loginHeader = document.getElementById('login-header');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        loginForm.classList.add('hidden');
        if(loginHeader) loginHeader.classList.add('hidden');
        welcomeContainer.classList.remove('hidden');
        portalContent.classList.remove('hidden');
        userDisplay.textContent = username;
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        portalContent.classList.add('hidden');
        welcomeContainer.classList.add('hidden');
        logoutNotice.classList.remove('hidden');
    });
}

// --- 3. YOUTUBE MODAL LOGIC (FIXED) ---
function playAcademyVideo(videoURL, title) {
    const modal = document.getElementById('videoModal');
    const modalContent = document.querySelector('.modal-content');

    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <span class="close-btn" onclick="closeVideo()">&times;</span>
        <h3 style="color: #005073; margin: 0 0 15px 0;">${title}</h3>
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; background: #000;">
            <iframe 
                src="${videoURL}" 
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <p style="font-size: 0.8rem; color: #666; margin-top: 10px; text-align: center;">
            <em>MVP Virtual Assistant Services - CCNA Academy</em>
        </p>
    `;
    
    modal.classList.remove('hidden');
    modal.style.display = "flex"; // Forces visibility if CSS is tricky
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = "none";
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) modalContent.innerHTML = ""; 
    }
}

// --- 4. INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});