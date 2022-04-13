'use strice!';


// navbar transparent on the top

const gnb = document.querySelector('.gnb');
const gnbHeight = gnb.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > gnbHeight) {
    gnb.classList.add('gnb--dark')
  } else {
    gnb.classList.remove('gnb--dark')
  }
});

// navbar toggle

const navbarMenu = document.querySelector('.main_menu');
const toggleBtn = document.querySelector('.toggle_btn');
toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.add('active');
});

const xBtn = document.querySelector('.outlined');
xBtn.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
})



// section-04 -slider
var swiper = new Swiper(".sleepSwiper", {
    pagination: {
        el: ".swiper-pagination",
      },
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });