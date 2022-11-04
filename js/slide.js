const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
      delay:3000,
    },
    pauseOnMouseEnter:true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// 두번째 슬라이드
const swiper2 = new Swiper('.mySwiper1',{
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
});

const swiper3 = new Swiper('.mySwiper2',{
        loop: true,
        spaceBetween: 10,
        thumbs: {
          swiper: swiper2,
        },
});

// 버튼 클릭 이펙트
$(function(){

  var $btn = $('.btn');
  $btn.click(function(){
    if($btn.hasClass('on')){
      $btn.removeClass('on');
    }else{
      $(this).addClass('on');
    }

  });
});

  //매인배너 아래쪽 슬라이더
const swiper4 = new Swiper('.mySwiper3',{
  loop:'true',
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView:'auto',
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },
});
