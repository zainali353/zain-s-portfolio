const text = "Welcome to Zain's Portfolio";
const heading = document.querySelector(".h1");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80); // typing speed
    }
}

typeEffect();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
