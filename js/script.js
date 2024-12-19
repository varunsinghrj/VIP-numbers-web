// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
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
    
    
    
    // Carousel Functionality
    let currentSlide = 0; // Start at the first slide
    const slides = document.querySelectorAll('.carousel-slide'); // Select all slides

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove active class from all slides
            if (i === index) {
                slide.classList.add('active'); // Add active class to the current slide
            }
        });
    }

    // Function for automatic slide change
    function autoSlide() {
        currentSlide++; // Move to the next slide
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Go back to the first slide
        }
        showSlide(currentSlide);
    }

    // Call the function every 3 seconds (3000ms = 3s)
    setInterval(autoSlide, 3000);

    // Initialize the carousel
    showSlide(currentSlide);
});

// Tab switching functionality
function changeTab(event, tabName) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add active class to the clicked tab
    event.target.classList.add('active');
}

// JavaScript for search button click animation
document.getElementById('search-btn').addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Placeholder text based on tab selection
        const searchInput = document.querySelector('.search-input');
        if (button.id === 'search-digits') {
            searchInput.placeholder = 'Enter Digits Here';
        } else if (button.id === 'search-price') {
            searchInput.placeholder = 'Enter Price Range';
        } else if (button.id === 'family-pack') {
            searchInput.placeholder = 'Enter Family Pack Details';
        }
    });
});

// Add animation to the "favorite" button
const favorites = document.querySelectorAll('.favorite');

favorites.forEach(favorite => {
  favorite.addEventListener('click', () => {
    if (favorite.style.color === 'red') {
      favorite.style.color = 'black';
    } else {
      favorite.style.color = 'red';
    }
  });
});

// Add functionality to "View More" button
const viewMoreBtn = document.querySelector('.view-more-btn');

viewMoreBtn.addEventListener('click', () => {
  alert('Load more cards...');
});
// Animation on Social Icon Click
const icons = document.querySelectorAll('.social-icon');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = 'scale(1.2)';
        }, 300);
    });
});
// Add hover effect to cards with a subtle scale animation
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.03)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
// Dynamic blog data
const blogsData = [
    {
      title: "The Fascination with VIP Numbers: Why Are They So Popular?",
      content: "VIP mobile numbers from Life Time Number have gained popularity due to their status symbolism, memorability...",
      image: "blog1.jpg",
    },
    {
      title: "The Market for VIP Numbers: Trends and Insights",
      content: "The demand for VIP numbers, including BSNL VIP numbers from Life Time Number, continues to rise...",
      image: "blog2.jpg",
    },
    {
      title: "What is a VIP Mobile Number and Why Should You Get One?",
      content: "VIP mobile numbers often feature repetitive digits (e.g., 7777) or sequential patterns, making them unique...",
      image: "blog3.jpg",
    },
  ];
  
  // Dynamically generate blogs
  const blogsContainer = document.getElementById("blogs");
  
  blogsData.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog");
  
    blogCard.innerHTML = `
      <div class="blog-image">
        <img src="${blog.image}" alt="${blog.title}">
      </div>
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
    `;
  
    blogsContainer.appendChild(blogCard);
  });
  
  // Add hover effect to features section
  const features = document.querySelectorAll(".feature");
  
  features.forEach((feature) => {
    feature.addEventListener("mouseenter", () => {
      feature.style.transform = "scale(1.05)";
      feature.style.transition = "transform 0.3s ease";
    });
  
    feature.addEventListener("mouseleave", () => {
      feature.style.transform = "scale(1)";
    });
  });
// No specific dynamic behavior added here yet, but this file can be used for interactivity.
console.log("Footer Loaded!");
  
