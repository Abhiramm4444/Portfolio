// Animation on Scroll for Timeline
const timelineItems = document.querySelectorAll('.timeline-item');
const experienceItems = document.querySelectorAll('.experience-item');
const projectCards = document.querySelectorAll('.project-card');

function checkVisibility() {
    // For Education Timeline
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
    
    // For Experience Items
    experienceItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
    
    // For Project Cards
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.classList.add('visible');
        }
    });
}

// Initial check
checkVisibility();

// Check on scroll
window.addEventListener('scroll', checkVisibility);