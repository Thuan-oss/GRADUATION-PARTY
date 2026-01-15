// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const openInviteBtn = document.getElementById('open-invite-btn');
const inputNameScreen = document.getElementById('input-name-screen');
const recipientNameInput = document.getElementById('recipient-name');
const confirmNameBtn = document.getElementById('confirm-name-btn');
const playMusicScreen = document.getElementById('play-music-screen');
const playMusicBtn = document.getElementById('play-music-btn');
const thankyouPage = document.getElementById('thankyou-page');
const personalGreeting = document.getElementById('personal-greeting');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isMusicPlaying = false;
let recipientName = '';

window.addEventListener('DOMContentLoaded', function() {
    welcomeScreen.style.display = 'flex';
    inputNameScreen.style.display = 'none';
    playMusicScreen.style.display = 'none';
    thankyouPage.style.display = 'none';
    document.body.classList.remove('thankyou-mode');
    startCountdown();
});

// Helper: Thêm hiệu ứng chuyển động mượt mà cho các bước chuyển đổi
function showWithEffect(el, effect) {
    if (!el) return;
    el.classList.remove('fade-in', 'fade-out', 'zoom-in');
    void el.offsetWidth; // force reflow
    el.style.display = (effect === 'fade-out') ? el.style.display : (el.tagName === 'DIV' ? 'flex' : 'block');
    el.classList.add(effect);
    if (effect === 'fade-out') {
        setTimeout(() => { el.style.display = 'none'; }, 500);
    }
}

openInviteBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    welcomeScreen.style.visibility = 'hidden';
    welcomeScreen.style.opacity = '0';
    showWithEffect(inputNameScreen, 'fade-in');
});

confirmNameBtn.addEventListener('click', () => {
    recipientName = recipientNameInput.value.trim();
    if (!recipientName) {
        recipientNameInput.focus();
        recipientNameInput.style.borderColor = '#e52d27';
        return;
    }
    showWithEffect(inputNameScreen, 'fade-out');
    setTimeout(() => {
        showWithEffect(playMusicScreen, 'fade-in');
    }, 500);
});

playMusicBtn.addEventListener('click', () => {
    showWithEffect(playMusicScreen, 'fade-out');
    setTimeout(() => {
        showWithEffect(thankyouPage, 'fade-in');
        document.body.classList.add('thankyou-mode');
        backgroundMusic.play();
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
        // Cá nhân hóa dòng chào
        if (personalGreeting) {
            personalGreeting.innerHTML = `Thân mời <span class=\"highlight-name\">${recipientName}</span> tham gia và chung vui lễ tốt nghiệp của<br><span class=\"highlight-name my-name-highlight\">TÂN Kỹ sư</span>`;
        }
        var recipientHighlight = document.getElementById('recipient-highlight');
        if (recipientHighlight) {
            recipientHighlight.textContent = recipientName;
        }
        var recipientHonor = document.getElementById('recipient-honor');
        if (recipientHonor) {
            recipientHonor.textContent = recipientName;
        }
        startCountdown();
        // Hiệu ứng zoom cho thiệp
        var thankyouContent = document.querySelector('.thankyou-content');
        if (thankyouContent) {
            thankyouContent.classList.add('zoom-in');
        }
    }, 500);
});

// Music Control
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play();
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
});

// Success Sound Effect
function playSuccessSound() {
    if (window.AudioContext || window.webkitAudioContext) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }
}

// Keyboard Controls
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'm':
        case 'M':
            musicToggle.click();
            break;
    }
});

// Auto-play music on first interaction
document.addEventListener('click', () => {
    if (!isMusicPlaying && thankyouPage.style.display === 'block') {
        backgroundMusic.play();
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
}, { once: true });

// Đếm ngược đến ngày tốt nghiệp
function startCountdown() {
    var countDownDate = new Date('2026-01-23T16:30:00').getTime();
    var countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    function pad(num) {
        return num < 10 ? '0' + num : num;
    }
    function updateCountdown() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        if (distance < 0) {
            countdownEl.innerHTML = 'Đã đến ngày tốt nghiệp!';
            clearInterval(timer);
            return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownEl.innerHTML = `${pad(days)} ngày ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    updateCountdown();
    var timer = setInterval(updateCountdown, 1000);
} 