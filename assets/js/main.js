/*==================== SHOW MENU ====================*/
// const navMenu = document.getElementById('nav-menu'),
//     navToggle = document.getElementById('nav-toggle'),
//     navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
// if (navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

/*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     const navMenu = document.getElementById('nav-menu')
//         // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// change service image on hover
// const service = document.querySelector('.service')

// function change() {

//     const type1 = document.querySelector('.type1')
//     const type2 = document.querySelector('.type2')
//     const service_icon = document.querySelector('.service_icon')
//     type1.classList.add('no_display');
//     type2.classList.add('display');
//     service_icon.classList.add('background');

// }

// function noChange() {
//     const type1 = document.querySelector('.type1')
//     const type2 = document.querySelector('.type2')
//     const service_icon = document.querySelector('.service_icon')
//     type1.classList.remove('no_display');
//     type2.classList.remove('display');
//     service_icon.classList.remove('background');

// }

// service.addEventListener('mouseover', change)
// service.addEventListener('mouseout', noChange)