/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


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
    why_choose_btn.classList.add("btn_background")
    about_us_btn.classList.remove("btn_background")
})

about_us_btn.addEventListener("click", () => {
    why_choose_para.classList.remove("visible_mode");
    about_para.classList.add("visible_mode")
    why_choose_btn.classList.remove("btn_background")
    about_us_btn.classList.add("btn_background")
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
    btn_student.classList.add("btn_background")
    btn_teacher.classList.remove("btn_background")
    btn_parent.classList.remove("btn_background")
})


btn_teacher.addEventListener("click", () => {
    student_works.classList.remove("visible_mode")
    teacher_works.classList.add("visible_mode")
    parent_works.classList.remove("visible_mode")
    btn_student.classList.remove("btn_background")
    btn_teacher.classList.add("btn_background")
    btn_parent.classList.remove("btn_background")
})


btn_parent.addEventListener("click", () => {
    student_works.classList.remove("visible_mode");
    teacher_works.classList.remove("visible_mode");
    parent_works.classList.add("visible_mode");
    btn_student.classList.remove("btn_background");
    btn_teacher.classList.remove("btn_background");
    btn_parent.classList.add("btn_background");
})

// swiper
let swiper = new Swiper(".testimonial_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,


    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
})

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


// scroll reveal

const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
})

sr.reveal(`.home-info, .find_teacher, .have_interest_card, .about_dark_container,
 .how_it_works,  .services h5, .services h2, .testimonials, .contact`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about_img, .about_content, .work1, .work2, .work3, .work4, 
.service1,.service2, .service3,.service4,.service5, .service6,.service7,.service8`, {
    origin: 'left',
    interval: 100
})