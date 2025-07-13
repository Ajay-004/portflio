// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Download resume function (.pdf from local assets folder)
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'AjayB_Resume.pdf'; // Direct file in root
    link.download = 'AjayB_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Animate skill bars when they come into view
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const level = progressBar.getAttribute('data-level');
                progressBar.style.width = level + '%';
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => observer.observe(card));
}

// Add scroll animations to cards
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .skill-card, .project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        observer.observe(el);
    });
}

// Typing effect for hero title (optional)
function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }

    type();
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Parallax effect on hero circles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroCircles = document.querySelectorAll('.hero-circle');

    heroCircles.forEach((circle, index) => {
        const speed = 0.5 + (index * 0.1);
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll on nav-link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Initialize animations
    animateSkillBars();
    addScrollAnimations();

    // Floating brand animation
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.style.animation = 'float 3s ease-in-out infinite';
    }

    // Button icon bounce animation
    document.querySelectorAll('.btn-icon').forEach(icon => {
        icon.style.animation = 'bounce 2s infinite';
    });

    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) rotateX(2deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0)';
        });
    });

    // Optional: Typing animation in hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Uncomment the next line to enable typing animation
        // typeWriter(heroTitle, 'Ajay B - Full Stack Developer', 150);
    }
});
