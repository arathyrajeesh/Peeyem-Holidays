document.addEventListener("DOMContentLoaded", () => {
    // 1. Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 2. Contact form submission handler
    const form = document.querySelector("#contact-section form");
    const formMessage = document.getElementById("form-message");
    
    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
        
                if (response.ok) {
                    formMessage.style.display = "block";
                    formMessage.style.color = "green";
                    formMessage.textContent = "Thanks! Your message has been sent successfully.";
                    form.reset();
                } else {
                    formMessage.style.display = "block";
                    formMessage.style.color = "red";
                    formMessage.textContent = "Oops! Something went wrong. Please try again.";
                }
            } catch (error) {
                formMessage.style.display = "block";
                formMessage.style.color = "orange";
                formMessage.textContent = "Network error. Please try again later.";
            }

            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);
        });
    }
    
    // 3. Testimonial Carousel functionality
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.carousel-nav .dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        if (testimonialCards[index] && testimonialDots[index]) {
            testimonialCards[index].classList.add('active');
            testimonialDots[index].classList.add('active');
        }
    }

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000); // Auto-advance every 5 seconds

    // 4. FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('active');
            
            if (answer.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

    // 5. Main Content Loader (Skeleton)
    async function loadMainContent() {
        const skeleton = document.getElementById('content-skeleton');
        const mainContent = document.getElementById('main-content');

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (skeleton && mainContent) {
            skeleton.style.display = 'none';
            mainContent.style.display = 'block';
        }

        fetchBlogPosts();
    }

    // 6. Blog Post Loader (Dynamic Content)
    async function fetchBlogPosts() {
        const blogContainer = document.querySelector('#blog .blog-posts');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // The posts are already in your HTML, so this function is not strictly needed
        // but it's good practice to have it here if you ever decide to fetch from an API
        // or a JSON file in the future. For now, it just simulates a delay.
    }
    
    // Initial page load function call
    loadMainContent();
});