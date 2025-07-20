// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Download resume from Google Drive
function downloadResume() {
  window.location.href = 'https://drive.google.com/uc?export=download&id=1JcwcGYYbrt417MQUmh7Xv1gGpfXbuSaw';
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
  const animatedElements = document.querySelectorAll('.card, .skill-card');
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

// Floating brand animation + other effects on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  animateSkillBars();
  addScrollAnimations();

  const navBrand = document.querySelector('.nav-brand');
  if (navBrand) navBrand.style.animation = 'float 3s ease-in-out infinite';

  document.querySelectorAll('.btn-icon').forEach(icon => {
    icon.style.animation = 'bounce 2s infinite';
  });
});
