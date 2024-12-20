// Animation for Stat Counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stat h2');
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});
// Animation for Testimonial Slider (Auto-scroll)
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.testimonial-slider');
    let scrollInterval = setInterval(() => {
        slider.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 3000);
});
