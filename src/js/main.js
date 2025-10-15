// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        try {
            // Here you would normally send data to a backend API
            // For now, we'll simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            // Show error message
            showNotification('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification Function
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    `;
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .stat-item, .about-text, .about-image').forEach(el => {
    observer.observe(el);
});

// Dynamic Copyright Year
function updateCopyrightYear() {
    const yearElement = document.querySelector('.footer-bottom-content p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} Spano Fuels. All rights reserved.`;
    }
}

// Update copyright year when page loads
document.addEventListener('DOMContentLoaded', updateCopyrightYear);

// Map Location Switcher
const mapTabs = document.querySelectorAll('.map-tab');
const mapLinks = document.querySelectorAll('.map-link-btn');
const mapIframe = document.getElementById('locationMap');

// Map locations with correct embed URLs
const locations = {
    warehouse: {
        url: 'https://maps.app.goo.gl/CwZV6z9kGXuPxCA8A',
        embed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115375.08101179777!2d55.4644395!3d25.355517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f593483214af3%3A0x957ebfa2e1ff5d38!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511087255!5m2!1sen!2s'
    },
    office: {
        url: 'https://maps.app.goo.gl/nmGX1AqdLcgBtmKs9',
        embed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115412.06746799707!2d55.3164674!3d25.3167295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44934a8563%3A0xd90f42421629e676!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511110277!5m2!1sen!2s'
    }
};

// Load initial map (warehouse)
if (mapIframe) {
    mapIframe.src = locations.warehouse.embed;
}

if (mapTabs.length > 0) {
    mapTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            
            // Update active tab
            mapTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update visible direction button
            mapLinks.forEach(link => {
                link.classList.remove('active');
                if (link.classList.contains(`${location}-link`)) {
                    link.classList.add('active');
                }
            });
            
            // Update iframe with correct location
            if (mapIframe && locations[location]) {
                mapIframe.src = locations[location].embed;
            }
        });
    });
}

// Console message
console.log('%c Welcome to Spano Fuels! ', 'background: #c41e3a; color: white; font-size: 16px; padding: 10px;');
console.log('%c Premier Fuel Supply Services in UAE ', 'background: #1a472a; color: white; font-size: 14px; padding: 8px;');

export { showNotification };
