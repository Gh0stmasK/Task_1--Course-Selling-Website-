//==============================NAVLIST===================================

const menuBtn = document.querySelector('.ri-menu-line');
const navList = document.querySelector('.navlist');

menuBtn.onclick = function () {
    menuBtn.classList.toggle('ri-arrow-up-double-line');
    navList.classList.toggle('active');
}

//==============================SCROLL REVEAL===================================

const sr = ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 200,
    rest: true,
});

sr.reveal('.home-container .left', { origin: "top" });
sr.reveal('.home-container .search-form', { origin: "left" });
sr.reveal('.home-container .right', { origin: "left" });
sr.reveal('.features-container .left .content', { origin: "right" });
sr.reveal('.features-container .right', { origin: "left" });
sr.reveal('.courses-container', { origin: "bottom" });
sr.reveal('.experts-container', { origin: "left" });
sr.reveal('.testimonial-container', { origin: "bottom" });
sr.reveal('.blog-container', { origin: "left" });
sr.reveal('.contact-container .left', { origin: "right" });
sr.reveal('.contact-container .right', { origin: "left" });
sr.reveal('.footer-container', { origin: "bottom" });
sr.reveal('.copyright', { origin: "top" });

function toggleMenu() {
    var navlist = document.getElementById('navlist');
    if (navlist.style.display === "flex") {
        navlist.style.display = "none";
    } else {
        navlist.style.display = "flex";
    }
}