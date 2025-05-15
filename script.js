// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

// Cursor Trail Effect
const cursor = document.querySelector('.cursor-trail');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Create Particles
const particlesContainer = document.querySelector('.particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.1;
    const color = Math.random() > 0.5 ? 'var(--neon-purple)' : 'var(--neon-red)';
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = opacity;
    particle.style.backgroundColor = color;
    
    particlesContainer.appendChild(particle);
}

// Add animation to particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-100px) translateX(50px); }
        100% { transform: translateY(0) translateX(0); }
    }
    .particle {
        position: absolute;
        border-radius: 50%;
        filter: blur(1px);
        animation: float infinite ease-in-out;
        z-index: -1;
    }
`;
document.head.appendChild(style);

// Scroll to top when page loads
window.onload = function() {
    window.scrollTo(0, 0);
};

// Billing Toggle Effect
const billingToggle = document.getElementById('billing-toggle');
const monthlyPrices = [5, 10, 20];
const yearlyPrices = [4, 8, 16]; // 20% discount

billingToggle.addEventListener('change', function() {
    const priceElements = document.querySelectorAll('.plan-price .amount');
    priceElements.forEach((element, index) => {
        if (this.checked) {
            element.textContent = yearlyPrices[index];
        } else {
            element.textContent = monthlyPrices[index];
        }
    });
});
