'use strict!';


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


// slide in, fade in effect

const scrollEle = document.querySelectorAll('.scroll');
const eleInView = (el, dividend = 1) => {
  const eleTop = el.getBoundingClientRect().top;
  return (
    eleTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const eleOutView = (el) => {
  const eleTop = el.getBoundingClientRect().top;
  return (
    eleTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScrollAni = () => {
  scrollEle.forEach((el) => {
    if (eleInView(el, 1.25)) {
      el.classList.add('scrolled');
    } else if (eleOutView(el)) {
      el.classList.remove('scrolled')
    }
  })
}

window.addEventListener('scroll', () => {
  handleScrollAni();
})


// section-01 mouse on,off effect
const title = document.querySelectorAll('.sec_01 article');
const content = document.querySelectorAll('.sec_01 article p');
const bg = document.querySelector('.sec_01');


title.forEach((item) => {item.addEventListener('mouseover', onHandler)});
function onHandler(item) {
    const mouseOn = item.currentTarget;
    const on = mouseOn.dataset.txt;
    const bgNum = on[on.length -1];

    title.forEach((value) => {
        value.classList.remove('on');
    })

    content.forEach((value) => {
        value.classList.remove('visible');
    })

    mouseOn.classList.add('on');
    document.querySelector('#' + on).classList.add('visible');

    for (let i =1; i <= 3; i++) {
        bg.classList.remove(`bg_${i}`);
    }
    bg.classList.add(`bg_${bgNum}`);
}