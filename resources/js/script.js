// NAVIGATION VARIABLES
const navigation = document.querySelector(".navigation");

// NAVIGATION FUNCTIONS
window.addEventListener("scroll", function() {
    navigation.classList.toggle("sticky", window.scrollY > 0);
});

// LIGHT DARK VARIABLES
let body = document.body;
let toggleBtn = document.querySelector(".toggle-btn");
let currentTheme = localStorage.getItem('currentTheme');

// LIGHT DARK FUNCTIONS
if (currentTheme) {
    body.classList.add("light-theme");
}

toggleBtn.addEventListener("click", function() {
    body.classList.toggle('light-theme');

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("currentTheme", "themeActive");
    } else {
        localStorage.removeItem("currentTheme");
    }
});

// TYPEWRITER VARIABLES
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".text-cursor");

const textArray = ["Passionate ", "Motivated ", "Creative ", "Committed "];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2500;
let textArrayIndex = 0;
let charIndex = 0;

// TYPEWRITER FUNCTIONS
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 2000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay);
});

// SCROLL REVEAL VARIABLES
const reveals = document.querySelectorAll(".reveal");

// SCROLL REVEAL FUNCTIONS
window.addEventListener("scroll", function() {
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
    
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }       
    }
});

// MENU ICON VARIABLES
const menuBtn = document.querySelector(".menu-icon");
const navLink = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

// MENU ICON FUNCTIONS
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navLink.classList.toggle("open");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        menuBtn.classList.remove("open");
        navLink.classList.remove("open");
    });
});