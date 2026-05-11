// 1. Clock functionality
function updateClock() {
    const now = new Date();
    document.getElementById('datetime').innerText = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// 2. Login Logic
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    
    document.getElementById('login-header').classList.add('hidden');
    loginForm.classList.add('hidden');
    
    document.getElementById('welcome-container').classList.remove('hidden');
    document.getElementById('portal-content').classList.remove('hidden');
    document.getElementById('user-display').innerText = user;
});

// 3. Logout Logic
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('welcome-container').classList.add('hidden');
    document.getElementById('portal-content').classList.add('hidden');
    document.getElementById('logout-notice').classList.remove('hidden');
});

// 4. Video Player Logic
function playAcademyVideo(url, title) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    const titleHeader = document.getElementById('videoTitle');

    player.src = url;
    titleHeader.innerText = title;
    modal.classList.remove('hidden');
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    
    player.src = ""; // Stops the video
    modal.classList.add('hidden');
}
