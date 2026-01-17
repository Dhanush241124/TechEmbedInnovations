// Copied from original project's static/js/main.js (adapted)
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll effect (respects light theme)
function updateNavbarBackground(){
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const light = document.body.classList.contains('light-theme');
    if (window.scrollY > 50) {
        navbar.style.background = light ? 'rgba(255,255,255,0.98)' : 'rgba(10, 14, 39, 0.98)';
    } else {
        navbar.style.background = light ? 'rgba(255,255,255,0.9)' : 'rgba(10, 14, 39, 0.95)';
    }
    // set computed text color from CSS variable when light theme active
    if(light){
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-light') || '#0a0e27';
        navbar.style.color = textColor.trim();
    } else {
        navbar.style.color = '';
    }
}
window.addEventListener('scroll', updateNavbarBackground);
// also update on theme change and on load
window.addEventListener('DOMContentLoaded', updateNavbarBackground);
window.addEventListener('load', updateNavbarBackground);
// observe body class changes (theme toggle) to refresh navbar
const bodyObserver = new MutationObserver(updateNavbarBackground);
bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerFade = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.neon-card, .project-card, .founder-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observerFade.observe(card);
    });
});

// Auto-dismiss alerts
setTimeout(function() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.style.transition = 'opacity 0.5s';
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 500);
    });
}, 5000);
