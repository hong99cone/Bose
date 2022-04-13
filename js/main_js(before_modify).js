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

const xBtn = document.querySelector('.x_btn');
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

// 해당 액티브된 슬라이드내에서 탭핸들러가 실행시
// if문 슬라이드가 액티브되면 탭핸들러 함수 구현 
// 스와이퍼 옵션 
// 스포츠 슬라이드 - 첫화면 지워지는지 안지워지는지 확인
// 지우는 부분을 확인
// 자식들한테 ㅇ영향을 미치지 않으면 속안에 탭을 탭핸들러 차일드 만들어서 
// 탭안의 탭 세부 탭을 따로 만든다
//********* dom 선택 - 부모가 특정되어있고 , 자식들만 영향 줄 수 있는 루트 찿아보기 !!! ************
// 바닐라 구현 애매함, 제이쿼리 쓰는이유가 있음 


function tabHandler(item) {
  const tabOn = item.currentTarget;
  const on = tabOn.dataset.tab;
  const bgNum = on[on.length-1];
  // 자바스크립트는 스트링도 배열로 저장한다


  tabItem.forEach((value) => {
    value.classList.remove("active");
  });

  tabContent.forEach((value) => {
    value.classList.remove("on");
  });

  tabOn.classList.add("active");
  document.querySelector("#" + on).classList.add("on");

  // bg all delete
  for (let i=1; i <= 8; i++) {
    tabBg.classList.remove(`bg${i}`);
  }
  tabBg.classList.add(`bg${bgNum}`);
};


// color_change_mouseover

const colorBorder = document.querySelectorAll('.on .product_color_border');


colorBorder.forEach((item) => {item.addEventListener("mouseover", colorChange)});

function colorChange(item) {
  const colorOn = item.currentTarget;
  const on = colorOn.dataset.color;
  const choosenProduct = document.querySelectorAll('.sec_03 .swiper-slide-active .imgs img');

  // 변수 바꿔서 부모특정지어주기
  // 안에 변수를 선언하는데 왜 읽힐까..?
  // 실패시 데이터아디 이름을 다르게 넣어주기
  // 모든얘들을 true
  // 슬라이드 구분해서 img 부모특정 안의 자식들만 처리 액티브된 슬라이드 안에서만 처리되게끔

  colorBorder.forEach((value) => {
    value.classList.remove('active');
  });

  choosenProduct.forEach((value) => {
    // const hasTrue = value.classList.contains('true');
    // if(hasTrue) {
    //   value.classList.remove('true');
    //   value.classList.add('false');
    // }
    value.classList.remove('true');
  });

  colorOn.classList.add('active');
  document.querySelector("#"+ on).classList.remove('false');
  document.querySelector("#"+ on).classList.add('true');

}

// function colorChangeTwo() {
//   const colorBorder = document.querySelectorAll('.sec_03 .product_color_border');
//   colorBorder.forEach( (eachColor, idx) => {
//     let colorOn = eachColor.dataset.color;
//     let changeImgs = document.querySelectorAll('.sec_03 .swiper-slide-active .imgs img');

//     for (let i = 0; i < changeImgs.length; i++) {
//       colorBorder[i].classList.remove('active');
//       changeImgs[i].classList.remove('true');
//     }

//     eachColor.classList.add('active');
//     document.querySelector("#"+ colorOn).classList.remove('false');
//     document.querySelector("#"+ colorOn).classList.add('true');
//   })
// }

// colorChangeTwo();


//product_slide
// 해당 스와이퍼가 액티브 일때만 실행한다
// 액티브일때 함수가 실행
// 메인핸들러랑 속언애 핸들러 나눠서 쓰기

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
});

// section_04

