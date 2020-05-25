'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }    
    
    scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContacBtn = document.querySelector('.home__contact');
homeContacBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selcetor) {
    const scrollTo = document.querySelector(selcetor);
    scrollTo.scrollIntoView({behavior: "smooth"});
}