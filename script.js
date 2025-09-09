const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        const form = document.querySelector("#contact-section form");
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
                        alert("✅ Thanks! Your message has been sent.");
                        form.reset();
                    } else {
                        alert("❌ Oops! Something went wrong. Please try again.");
                    }
                } catch (error) {
                    alert("⚠️ Network error. Please try again later.");
                }
            });
        }
        
        async function fetchBlogPosts() {
            const blogContainer = document.getElementById('blog-container');

            // Simulate a network delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Real data for blog posts (This would come from an API)
            const posts = [
                {
                    image: 'https://images.unsplash.com/photo-1543349688-656914f6b579?fm=jpg&q=80&w=2070',
                    title: 'The Ultimate Guide to Mountain Treks',
                    excerpt: 'Discover breathtaking trails and tips for your next mountain adventure. From gear to safety, we cover everything you need to know.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1563721345592-6663364f9f70?fm=jpg&q=80&w=2070',
                    title: 'Exploring Hidden Gems in Kerala',
                    excerpt: 'Journey through the serene backwaters and lush tea plantations of Kerala. Find out the best-kept secrets of God’s Own Country.'
                },
                {
                    image: 'https://images.unsplash.com/photo-1549472304-fd3ae31f2378?fm=jpg&q=80&w=2070',
                    title: 'Your First Solo Trip: A Complete Checklist',
                    excerpt: 'Feeling adventurous? This guide will walk you through planning your first solo trip, from choosing a destination to packing essentials.'
                }
            ];

            // Clear the skeleton loaders
            blogContainer.innerHTML = '';

            // Generate the real blog cards
            posts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'blog-card';
                card.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-card-content">
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                    </div>
                `;
                blogContainer.appendChild(card);
            });
        }
        
        // New function to load all main content sections
        document.addEventListener("DOMContentLoaded", () => {
            loadMainContent();
        });

        async function loadMainContent() {
            const skeleton = document.getElementById('content-skeleton');
            const mainContent = document.getElementById('main-content');

            // Simulate a network delay for fetching content
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Hide the skeleton and show the actual content
            skeleton.style.display = 'none';
            mainContent.style.display = 'block';

            // Now that the blog section is visible, run its specific loading function
            fetchBlogPosts();
        }