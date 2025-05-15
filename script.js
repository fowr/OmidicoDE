document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.add('active');
            hamburger.classList.add('active');
            closeMenu.classList.add('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            closeMenu.classList.remove('active');
        });
    }

    // Close mobile nav when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                closeMenu.classList.remove('active');
            }
        });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const counterSpeed = 1000000; // The lower the faster

    // Start counter animation when user scrolls to counter section
    const counterSection = document.querySelector('.counter-section');
    let countersStarted = false;

    if (counterSection) {
        window.addEventListener('scroll', () => {
            if (isElementInViewport(counterSection) && !countersStarted) {
                countersStarted = true;
                runCounters();
            }
        });

        // Check on page load as well
        if (isElementInViewport(counterSection) && !countersStarted) {
            countersStarted = true;
            runCounters();
        }
    }

    function runCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const updateCount = () => {
                const increment = target / counterSpeed;
                if (count < target) {
                    count += Math.ceil(increment);
                    counter.innerText = count.toLocaleString();
                    setTimeout(updateCount, 2);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    }

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;

    if (carousel && slides.length > 0) {
        // Initialize carousel
        showSlide(currentIndex);

        // Start automatic sliding
        startAutoSlide();

        // Event listeners for buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                changeSlide(currentIndex - 1);
                startAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                changeSlide(currentIndex + 1);
                startAutoSlide();
            });
        }

        // Event listeners for dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                const slideIndex = +dot.getAttribute('data-index');
                changeSlide(slideIndex);
                startAutoSlide();
            });
        });

        // Pause autoplay on hover
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);

        // Handle touch events for mobile swipe
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);

        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left - next slide
                stopAutoSlide();
                changeSlide(currentIndex + 1);
                startAutoSlide();
            } else if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right - previous slide
                stopAutoSlide();
                changeSlide(currentIndex - 1);
                startAutoSlide();
            }
        }
    }

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        currentIndex = index;

        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show current slide
        slides[currentIndex].classList.add('active');

        // Update dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[currentIndex].classList.add('active');
    }

    function changeSlide(index) {
        showSlide(index);
    }

    function startAutoSlide() {
        stopAutoSlide();
        interval = setInterval(() => {
            changeSlide(currentIndex + 1);
        }, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
}); 