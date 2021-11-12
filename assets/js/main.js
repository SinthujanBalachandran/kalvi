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


// about button click
const about_us_btn = document.getElementById('about_us_btn');
const why_choose_btn = document.getElementById('why_choose_btn');
const about_para = document.getElementById('about_para');
const why_choose_para = document.getElementById('why_choose_para');

why_choose_btn.addEventListener("click", () => {
    why_choose_para.classList.add("visible_mode");
    about_para.classList.remove("visible_mode")
    why_choose_btn.classList.add("btn_bacground")
    about_us_btn.classList.remove("btn_bacground")
})

about_us_btn.addEventListener("click", () => {
    why_choose_para.classList.remove("visible_mode");
    about_para.classList.add("visible_mode")
    why_choose_btn.classList.remove("btn_bacground")
    about_us_btn.classList.add("btn_bacground")
})