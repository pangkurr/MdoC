/* js/mobile.js */

$(function(){
var $ms = $('.mobile_sub');
var $sm = $('.m_subMenu');

$ms.find('i').click(function(){
  $sm.removeClass('hide');
  $sm.addClass('show');
});

$sm.find('i').click(function(){
  $sm.removeClass('show');
  $sm.addClass('hide');
  
});
});