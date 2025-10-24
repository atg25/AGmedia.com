/**
 * AGmedia - Main JavaScript
 * This file contains all client-side functionality for the AGmedia website
 * - Smooth scrolling
 * - Header scroll effects
 * - Contact form submission
 * - Testimonial slider
 * - Mobile navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all main functions
    initSmoothScrolling();
    initHeaderScrollEffect();
    initContactForms();
    initTestimonialSlider();
    initMobileNavigation();
});

/**
 * Initialize smooth scrolling for all anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            // If mobile menu is open, close it
            if(document.querySelector('.mobile-nav').classList.contains('active')) {
                toggleMobileNav();
            }
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize header scroll effect (shrinks header on scroll)
 */
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '20px 0';
        }
    });
}

/**
 * Initialize contact form submission handling
 */
function initContactForms() {
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const service = form.querySelector('#service').value;
            
            // In a real implementation, you would send this data to a server
            // For this demonstration, we'll just show a confirmation message
            
            // Hide the form
            form.style.display = 'none';
            
            // Create a confirmation message
            const confirmationDiv = document.createElement('div');
            confirmationDiv.className = 'form-confirmation';
            confirmationDiv.innerHTML = `
                <h3>Thank you, ${name}!</h3>
                <p>Your consultation request has been received. I'll contact you at ${email} within 1 business day to schedule your free consultation.</p>
                <p>Looking forward to discussing your ${service || 'website'} needs!</p>
            `;
            
            // Insert the confirmation message where the form was
            form.parentNode.appendChild(confirmationDiv);
        });
    });
}

/**
 * Initialize testimonial slider functionality
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const navDots = document.querySelectorAll('.nav-dot');
    
    if(navDots.length > 0) {
        // Add click event to nav dots
        navDots.forEach(dot => {
            dot.addEventListener('click', function() {
                showTestimonial(this.getAttribute('data-testimonial'));
            });
        });
        
        // Auto-rotate testimonials every 5 seconds
        let currentTestimonial = 0;
        
        function rotateTestimonials() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            
            // Get the ID of the current testimonial
            const targetId = testimonials[currentTestimonial].id;
            showTestimonial(targetId);
        }
        
        // Set interval for auto-rotation
        setInterval(rotateTestimonials, 5000);
    }
    
    /**
     * Show a specific testimonial and update active dot
     * @param {string} targetId - The ID of the testimonial to show
     */
    function showTestimonial(targetId) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        // Remove active class from all dots
        navDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected testimonial
        document.getElementById(targetId).style.display = 'block';
        
        // Add active class to the corresponding dot
        document.querySelector(`[data-testimonial="${targetId}"]`).classList.add('active');
    }
}

/**
 * Initialize mobile navigation functionality
 */
function initMobileNavigation() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    
    // Event listener for mobile nav toggle
    if(mobileNavToggle) {
        mobileNavToggle.addEventListener('click', toggleMobileNav);
    }
}

/**
 * Toggle mobile navigation menu visibility
 */
function toggleMobileNav() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileNavToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}
