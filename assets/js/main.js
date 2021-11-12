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

// how it works buttons

const student_works = document.getElementById("student_works");
const teacher_works = document.getElementById("teacher_works");
const parent_works = document.getElementById("parent_works");
const btn_student = document.getElementById("btn_student");
const btn_teacher = document.getElementById("btn_teacher");
const btn_parent = document.getElementById("btn_parent");


btn_student.addEventListener("click", () => {
    student_works.classList.add("visible_mode")
    teacher_works.classList.remove("visible_mode")
    parent_works.classList.remove("visible_mode")
    btn_student.classList.add("btn_bacground")
    btn_teacher.classList.remove("btn_bacground")
    btn_parent.classList.remove("btn_bacground")
})

btn_teacher.addEventListener("click", () => {
    student_works.classList.remove("visible_mode")
    teacher_works.classList.add("visible_mode")
    parent_works.classList.remove("visible_mode")
    btn_student.classList.remove("btn_bacground")
    btn_teacher.classList.add("btn_bacground")
    btn_parent.classList.remove("btn_bacground")
})
btn_parent.addEventListener("click", () => {
    student_works.classList.remove("visible_mode")
    teacher_works.classList.remove("visible_mode")
    parent_works.classList.add("visible_mode")
    btn_student.classList.remove("btn_bacground")
    btn_teacher.classList.remove("btn_bacground")
    btn_parent.classList.add("btn_bacground")
})