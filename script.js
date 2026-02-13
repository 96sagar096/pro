// ==================== Hamburger Menu Toggle ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== Smooth Scrolling Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Image Slider / Carousel ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function updateSlider() {
    // Update slides
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Button controls
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Dot controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Auto-advance slider every 6 seconds
setInterval(() => {
    nextSlide();
}, 6000);

// ==================== FAQ Accordion ====================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        
        // Close all other items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                const otherHeader = item.querySelector('.accordion-header');
                otherHeader.classList.remove('active');
            }
        });
        
        // Toggle current item
        accordionItem.classList.toggle('active');
        this.classList.toggle('active');
    });
});

// ==================== Modal Popup ====================
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');
const ctaButton = document.querySelector('.cta-button');

// Open modal on CTA button click
ctaButton.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Handle form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
        modal.classList.remove('show');
    });
}

// ==================== Scroll-based Animation (AOS - Animate On Scroll) ====================
class SimpleAOS {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.observerOptions
        );
        this.init();
    }

    init() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Optional: Stop observing once animated
                // this.observer.unobserve(entry.target);
            }
        });
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new SimpleAOS();
    });
} else {
    new SimpleAOS();
}

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Scroll to Top on Page Load ====================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ==================== Prevent Body Scroll When Modal is Open ====================
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (modal.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
});

observer.observe(modal, { attributes: true, attributeFilter: ['class'] });

// ==================== Initially disable overflow when modal shows ====================
const style = document.createElement('style');
style.textContent = `
    .modal.show {
        display: flex !important;
    }
`;
document.head.appendChild(style);

// ==================== Performance: Debounce scroll events ====================
function debounce(func, delay) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

// ==================== Keyboard accessibility ====================
document.addEventListener('keydown', (e) => {
    // Close modal on Escape key
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
    
    // Slider navigation with keyboard
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

// ==================== Console message ====================
console.log('%c🚀 Welcome to TechVision 2026!', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cExplore the future of technology with us.', 'font-size: 14px; color: #6366f1;');
