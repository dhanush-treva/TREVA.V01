/* ================================
   NAVBAR SCROLL EFFECT
================================ */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ================================
   COUNTER ANIMATION
================================ */
document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCounters() {
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;

            // Speed based on number size
            let speed = target < 20 ? 150 : 10;

            let update = setInterval(() => {
                if (count < target) {
                    count++;
                    counter.textContent = count + "+";
                } else {
                    clearInterval(update);
                }
            }, speed);
        });
    }

    // Trigger when highlight-stats enters view
    window.addEventListener("scroll", () => {
        const section = document.querySelector(".highlight-stats");

        if (!section) return; // safety

        const pos = section.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100 && !started) {
            started = true;
            startCounters();
        }
    });

});
// Reveal On Scroll Animation
const serviceCards = document.querySelectorAll(".service-card");

function revealServices() {
    serviceCards.forEach(card => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealServices);
revealServices();
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        cards.forEach(c => c.classList.remove("expanded", "expand-2x2"));

        const id = Number(card.dataset.id);

        // Row detection → 1–2–3 (top), 4–5–6 (bottom)
        const isTopRow = id <= 3;
        const isBottomRow = id >= 4;

        // Column detection → 1–4 (left), 2–5 (middle), 3–6 (right)
        const columnPos = id % 3 || 3;

        card.classList.add("expanded", "expand-2x2");

        // Adjust grid position based on location
        if (isTopRow && columnPos === 1) {
            // Expand to right + down
            card.style.gridColumn = "1 / span 2";
            card.style.gridRow = "1 / span 2";
        }

        if (isTopRow && columnPos === 2) {
            // Expand both sides
            card.style.gridColumn = "1 / span 3";
            card.style.gridRow = "1 / span 2";
        }

        if (isTopRow && columnPos === 3) {
            // Rightmost → expand left + down
            card.style.gridColumn = "2 / span 2";
            card.style.gridRow = "1 / span 2";
        }

        if (isBottomRow && columnPos === 1) {
            card.style.gridColumn = "1 / span 2";
            card.style.gridRow = "2 / span 2";
        }

        if (isBottomRow && columnPos === 2) {
            card.style.gridColumn = "1 / span 3";
            card.style.gridRow = "2 / span 2";
        }

        if (isBottomRow && columnPos === 3) {
            card.style.gridColumn = "2 / span 2";
            card.style.gridRow = "2 / span 2";
        }
    });

    // When mouse leaves grid → reset
    document.querySelector(".services-grid").addEventListener("mouseleave", () => {
        cards.forEach(c => {
            c.classList.remove("expanded", "expand-2x2");
            c.style.gridColumn = "";
            c.style.gridRow = "";
        });
    });
});
const workLinks = [
    "https://www.instagram.com/reel/DUA08v0iUCw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/yyyy/",
    "https://www.instagram.com/reel/zzzz/",
    // Add more…
];

const grid = document.getElementById("workGrid");

workLinks.forEach(link => {
    let card = document.createElement("a");
    card.href = link;
    card.target = "_blank";
    card.classList.add("work-card");

    card.innerHTML = `
        <img src="https://www.instagram.com/p/placeholder/" alt="Work">
    `;

    grid.appendChild(card);
});

const testimonials = document.querySelectorAll(".testimonial-card");
const dotContainer = document.getElementById("testimonialDots");

let index = 0;

/* Create dots dynamically */
testimonials.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => showTestimonial(i));

    dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

/* Function to show testimonial */
function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    testimonials[i].classList.add("active");
    dots[i].classList.add("active");

    index = i;
}

/* Auto scroll every 5 seconds */
setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}, 5000);
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.querySelectorAll(".comp-col").forEach(col => {
    col.addEventListener("click", () => {
        document.querySelectorAll(".comp-col").forEach(c => c.classList.remove("active"));
        col.classList.add("active");
    });
});

