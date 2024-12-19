const hero = document.querySelector(".hero-content");
hero.style.opacity = 0;
hero.style.transform = "translateY(-20px)";
setTimeout(() => {
    hero.style.transition = "all 1s";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
}, 500);

// Logo Click Functionality
const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    alert("You clicked the logo! Redirecting to Home.");
    window.location.href = "#"; // Replace '#' with home page link
});
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Hamburger menu click event
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggle the active class to show/hide the menu
    });
});
