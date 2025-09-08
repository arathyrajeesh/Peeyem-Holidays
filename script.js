const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
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
