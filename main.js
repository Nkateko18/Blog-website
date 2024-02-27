function showSection(sectionId) {
    // Hide all content sections
    var allSections = document.querySelectorAll('section');
    allSections.forEach(function (section) {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Adjust header height and show content for Homepage
    var header = document.querySelector('header');
    var navContainer = document.querySelector('.nav-container');

    if (sectionId === 'Homepage') {
        header.style.height = 'auto';
        navContainer.style.backgroundColor = 'var(--text-color)';
        var contentSection = document.querySelector('.content');
        contentSection.style.display = 'flex'; // Show content
    } else {
        header.style.height = '70px';
        navContainer.style.backgroundColor = 'var(--text-color)';
    }

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollToBlogButton = document.getElementById("scrollToBlogButton");
    const blogSection = document.getElementById("Newsletterpage");

    scrollToBlogButton.addEventListener("click", function () {
        // Scroll to the blog section smoothly
        blogSection.scrollIntoView({ behavior: "smooth" });
    });
});

const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navlist.classList.remove('active');
    });
});



var swiper = new Swiper (".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidePerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const byId = (id) => {
    return document.getElementById(id);
}
const $signUpButton = byId('signUp');
const $signInButton = byId('signIn');
const $container = byId('container');

$signUpButton.addEventListener (
    'click',
    () => {
        $container.classList.add
        ('right-panel-active');
    },
);

$signInButton.addEventListener (
    'click',
    () => {
        $container.classList.remove
        ('right-panel-active');
    },
);


function authenticateUser() {
    // Get values from the form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simple example: check if both fields are not empty
    if (email && password) {
        alert("Authentication successful!");
        // You would typically make an AJAX request to the server for authentication here
    } else {
        alert("Please enter both username and password");
    }
}
