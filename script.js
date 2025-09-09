const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the class to show/hide the menu on mobile
    navLinks.classList.toggle('hidden-on-mobile');
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        // Only hide if the menu is not already hidden
        if (!navLinks.classList.contains('hidden-on-mobile')) {
            navLinks.classList.add('hidden-on-mobile');
        }
    }
});