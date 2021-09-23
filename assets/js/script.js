"use strict";

AOS.init({
  offset: 100,
  duration: 1500,
  easing: 'ease',
  delay: 200,
  once: false,
  anchorPlacement: 'bottom-center'
});
$(function () {
  // お知らせタブ
  $('.news__trigger').click(function () {
    var index = $('.news__trigger').index(this);
    $('.news__trigger').removeClass('is-active');
    $(this).addClass('is-active');
    $('.news__items').removeClass('is-active').eq(index).addClass('is-active');
  }); // ドロワー

  $('.js-drawer').on('click', function (e) {
    e.preventDefault();
    var targetClass = $(this).attr('data-target');
    $('.' + targetClass).toggleClass('is-checked');
    $('.drawer__bar').toggleClass('is-checked');
    $('body').toggleClass('noscroll');
    return false;
  });
}); // スライダー

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // ループの指定
  effect: "fade",
  //フェードの指定
  autoplay: {
    delay: 4000,
    //４秒後に次のスライドへ
    disableOnInteraction: false //ユーザー側で操作してもスライドを止めない

  },
  speed: 2000,
  //２秒かけてフェードで切り替わる
  allowTouchMove: false //マウスでのスワイプを禁止

});