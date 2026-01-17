// Copied from original project's static/js/script.js (adapted)
// ==================== SMOOTH SCROLL ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== NAVBAR ACTIVE LINK ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
            link.style.color = 'var(--neon-blue)';
        } else {
            link.classList.remove('active');
        }
    });
});

// ==================== FORM VALIDATION ==================== //
(function() {
    'use strict';
    window.addEventListener('load', function() {
        const forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// ==================== SCROLL ANIMATIONS ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.neon-card').forEach(card => {
    observer.observe(card);
});

// ==================== TYPING ANIMATION ==================== //
function typeEffect(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ==================== PARTICLE EFFECT ==================== //
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.borderRadius = '50%';
    particle.style.background = 'var(--neon-blue)';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = '0 0 10px var(--neon-blue)';
    particle.style.zIndex = '9999';
    document.body.appendChild(particle);

    let opacity = 1;
    const velocity = {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 6
    };

    const animate = () => {
        x += velocity.x;
        y += velocity.y;
        opacity -= 0.02;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };

    animate();
}

// Add particle effect on button click
document.querySelectorAll('.btn-neon').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) {
            setTimeout(() => createParticle(x, y), i * 20);
        }
    });
});

// ==================== MODAL FORM RESET ==================== //
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    modal.addEventListener('hidden.bs.modal', function() {
        const forms = this.querySelectorAll('form');
        forms.forEach(form => form.reset());
    });
});

// ==================== COUNTER ANIMATION ==================== //
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== ACTIVE NAVIGATION ==================== //
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// ==================== SCROLL TO TOP BUTTON ==================== //
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'btn btn-neon';
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '30px';
scrollToTopBtn.style.right = '30px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.zIndex = '1000';
scrollToTopBtn.style.width = '50px';
scrollToTopBtn.style.height = '50px';
scrollToTopBtn.style.padding = '0';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.fontSize = '1.2rem';

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== LAZY LOADING IMAGES ==================== //
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== NEON GLOW EFFECT ==================== //
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.neon-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            card.style.boxShadow = `
                0 0 20px rgba(0, 243, 255, 0.3),
                ${(x - rect.width / 2) * 0.5}px ${(y - rect.height / 2) * 0.5}px 20px rgba(0, 243, 255, 0.2)
            `;
        }
    });
});

// ==================== KEYBOARD SHORTCUTS ==================== //
document.addEventListener('keydown', function(e) {
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (e.key === 'End') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ==================== LOADING ANIMATION ==================== //
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ==================== FORM SUCCESS MESSAGE ==================== //
function showSuccessMessage(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show neon-alert';
    alert.innerHTML = `
        <strong><i class="fas fa-check-circle"></i> Success!</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('main') || document.body;
    container.insertBefore(alert, container.firstChild);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// ==================== FILTER FUNCTIONALITY ==================== //
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        const items = document.querySelectorAll('[data-category]');

        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('animate-fade-in'), 50);
            } else {
                item.style.display = 'none';
                item.classList.remove('animate-fade-in');
            }
        });
    });
});

console.log('✨ TechEmbed Innovations - Frontend scripts loaded ✨');

// Workshop modal prefill (Bootstrap 5)
document.addEventListener('show.bs.modal', function(e){
    if(e.target && e.target.id === 'workshopModal'){
        const button = e.relatedTarget;
        if(!button) return;
        const workshop = button.getAttribute('data-workshop');
        const modal = document.getElementById('workshopModal');
        const modalInput = modal.querySelector('#modalWorkshop');
        const hiddenInput = modal.querySelector('#workshopInput');
        if(modalInput) modalInput.value = workshop;
        if(hiddenInput) hiddenInput.value = workshop;
    }
});

// Logo click particle effect and subtle hover glow
(function(){
    const logo = document.querySelector('.navbar-brand img');
    if(!logo) return;

    logo.addEventListener('click', function(e){
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width/2;
        const y = rect.top + rect.height/2;
        for(let i=0;i<12;i++){
            setTimeout(()=> createParticle(x + (Math.random()-0.5)*20, y + (Math.random()-0.5)*20), i*30);
        }
    });

    // subtle glow following mouse over logo
    logo.addEventListener('mousemove', function(e){
        this.style.boxShadow = `0 0 30px rgba(0,243,255,0.25), ${(e.clientX - this.getBoundingClientRect().left - this.width/2)*0.2}px ${(e.clientY - this.getBoundingClientRect().top - this.height/2)*0.2}px 20px rgba(0,243,255,0.12)`;
    });

    logo.addEventListener('mouseleave', function(){
        this.style.boxShadow = '0 0 12px rgba(0,243,255,0.15)';
    });
})();
