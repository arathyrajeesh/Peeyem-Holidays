const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
    }
});
