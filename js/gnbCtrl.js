$(function(){
    //2차 메뉴 숨기기
    $('.sub').hide();

    $('#gnb>li').hover(function(){
      $(this).find('.sub').stop().slideDown(200);
    },function(){
      $(this).find('.sub').stop().slideUp(200);
    });

  var $win = $(window); //브라우저
  var $header = $('header'); //헤더
  var $wrap = $('.gnb_wrapper');
  var $gnb = $('.gnb_wrap');
  var $gu = $gnb.find('ul');
  var uw = $gu.width();
  var uhw = uw/2;
  var asc = 100;

  //scroll 이벤트
  $win.scroll(function(){
    if($win.scrollTop()>asc){
      $wrap.addClass('gnbFixed');
    }else{
      $wrap.removeClass('gnbFixed');
    }
  });
});