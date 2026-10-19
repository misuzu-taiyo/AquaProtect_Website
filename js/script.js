document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Toggle
    const hamburger = document.querySelector('.js-hamburger');
    const nav = document.querySelector('.js-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-open');
            // Prevent body scroll when menu is open
            document.body.style.overflow = hamburger.classList.contains('is-active') ? 'hidden' : '';
        });
    }

    // 2. Header Style on Scroll
    const header = document.querySelector('.js-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });

    // 3. Premium Fade-in Animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before the element is fully in view
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                observer.unobserve(entry.target); // Unobserve after animating
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.js-fade');
    fadeElements.forEach((el, index) => {
        // Optional: Add slight staggered delay if multiple elements appear at once
        // el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});