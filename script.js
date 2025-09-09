const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Close navbar when clicking outside
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
