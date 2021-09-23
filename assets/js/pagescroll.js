"use strict";

$(function () {
  // スティッキーヘッダー
  var $win = $(window),
      $header = $('.header'),
      headerPos = $header.offset().top,
      fixedClass = '-white';
  $win.on('load scroll', function () {
    var value = $(this).scrollTop();

    if (value > headerPos) {
      $header.addClass(fixedClass);
      $('.drawer').addClass(fixedClass);
    } else {
      $header.removeClass(fixedClass);
      $('.drawer').removeClass(fixedClass);
    }
  });
});