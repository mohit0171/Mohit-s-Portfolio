document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    function setTheme(theme) {
        if (theme === 'bright') {
            body.classList.remove('dark-theme');
            body.classList.add('bright-theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('portfolio-theme', 'bright');
        } else {
            body.classList.remove('bright-theme');
            body.classList.add('dark-theme');
            themeIcon.textContent = '☀️';
            localStorage.setItem('portfolio-theme', 'dark');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.classList.contains('bright-theme') ? 'bright' : 'dark';
        setTheme(currentTheme === 'bright' ? 'dark' : 'bright');
    });

    // Check Local Storage for Theme Preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Mobile Navigation Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.closeMobileMenu = function() {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    };

    // Horizontal Scroll Controls
    const leftScrollBtn = document.getElementById('leftScrollBtn');
    const rightScrollBtn = document.getElementById('rightScrollBtn');
    const videoBar = document.getElementById('videoBar');

    leftScrollBtn.addEventListener('click', () => {
        videoBar.scrollBy({ left: -320, behavior: 'smooth' });
    });

    rightScrollBtn.addEventListener('click', () => {
        videoBar.scrollBy({ left: 320, behavior: 'smooth' });
    });

    // Video Modal Handlers
    const videoCards = document.querySelectorAll('.video-card[data-video]');
    const videoModal = document.getElementById('videoModal');
    const activeDriveVideo = document.getElementById('activeDriveVideo');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const instaCard = document.getElementById('instaCard');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoUrl = card.getAttribute('data-video');
            activeDriveVideo.src = videoUrl;
            videoModal.style.display = 'flex';
        });
    });

    instaCard.addEventListener('click', () => {
        window.open('https://www.instagram.com/logical_mahra', '_blank');
    });

    function closeVideo() {
        activeDriveVideo.src = '';
        videoModal.style.display = 'none';
    }

    closeModalBtn.addEventListener('click', closeVideo);

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideo();
        }
    });
});