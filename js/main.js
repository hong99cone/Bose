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


// section_01 
// slide_swiper

var swiper = new Swiper(".sec_01", {
  pagination: {
    el: ".swiper-pagination",
  },
});



// section_02 
// article_right -autoplay-slide_swiper
var swiper = new Swiper(".sec_02 article.right", {
  spaceBetween: 30,
  // centeredSlides: true,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
});



// section_03  
//tab_menu
const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".contents-container .content");
const tabBg = document.querySelector(".sec_03");


tabItem.forEach((item) => { item.addEventListener("click", tabHandler) });

function tabHandler(item) {
  const tabOn = item.currentTarget;
  const on = tabOn.dataset.tab;
  const bgNum = on[on.length-1];

  tabItem.forEach((value) => {
    value.classList.remove("active");
  });

  tabContent.forEach((value) => {
    value.classList.remove("on");
  });

  tabOn.classList.add("active");
  document.querySelector("#" + on).classList.add("on");

  // background all Del
  for (let i=1; i <= 8; i++) {
    tabBg.classList.remove(`bg${i}`);
  }
  tabBg.classList.add(`bg${bgNum}`);
};


// color_change 
function colorChange() {
  const colorBorder = document.querySelectorAll('.sec_03 .on .swiper-slide-active .product_color_border');

  Array.from(colorBorder).forEach((eachColor, idx) => {
    eachColor.addEventListener('click', (e) => {
      const changeImgs = document.querySelectorAll('.sec_03 .swiper-slide-active .imgs img');
      const target = e.target;
      console.log(changeImgs);
      for (let i = 0; i< changeImgs.length; i++) {
        changeImgs[i].classList.remove('true');
        colorBorder[i].classList.remove('active');
      }
      changeImgs[idx].classList.add('true');
      target.classList.add('active');
    })
  })
}


//product_slide
var swiper = new Swiper(".sec_03 .product-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  //탭 안의 스와이퍼 갱신, 낮은버전
  on: {
    click : function colorChange() {
        const colorBorder = document.querySelectorAll('.on .swiper-slide-active .product_color_border');
        const choosenProduct = document.querySelectorAll('.sec_03 .on .swiper-slide-active .imgs img');
        colorBorder.forEach((eachColor, index) => {
            eachColor.addEventListener('click', (e) => {
              let target = e.currentTarget;
              for (let i=0; i < choosenProduct.length; i ++) {
                choosenProduct[i].classList.remove('true');
                colorBorder[i].classList.remove('active');
              }
              choosenProduct[index].classList.add('true');
              target.classList.add('active');
            })
          })
      }
  }
});
