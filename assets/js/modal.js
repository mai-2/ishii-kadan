"use strict";

// flatpickr
var config = {
  minDate: "today",
  mode: "range",
  altInput: true,
  altFormat: "Y-m-d",
  locale: {
    rangeSeparator: 'から'
  }
};
flatpickr('.flatpickr', config); // セレクターの初期値のみ色を変える

function changeColor(hoge) {
  if (hoge.value == 0) {
    hoge.style.color = '';
  } else {
    hoge.style.color = 'black';
  }
}

;
$(function () {
  // formの入力確認
  var $form = $('#js-form');
  var $submit = $('#js-submit');
  $('#js-form input, #js-form select').on('change', function () {
    if ($('#js-form input[type="text"]').val() !== "" && $('#js-form input[type="email"]').val() !== "" && $('#js-form input[type="hidden"]').val() !== "" && $('#js-form select').val() !== "") {
      // 全て入力された時
      $submit.prop('disabled', false);
      $submit.addClass('-active');
    } else {
      // 入力されていない時
      $submit.prop('disabled', true);
      $submit.removeClass('-active');
    }
  }); // 送信完了

  $('#js-submit').on('click', $submit, function () {
    $form.slideUp();
    $('#js-success').slideDown();
  }); // モーダル開く

  $('.js-open-button').on('click', function (e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(target).show();
    $('#js-header').addClass('hidden');
    $('.slide-text').addClass('hidden');
    $('body').addClass('noscroll');
  }); // モーダル閉じる

  $('.js-close-button').on('click', function (e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(target).hide();
    $('#js-header').removeClass('hidden');
    $('.slide-text').removeClass('hidden');
    $('body').removeClass('noscroll');
  }); // モーダル領域をクリックでフェードアウトさせる

  $('.modal').click(function () {
    $(this).fadeOut();
    $('#js-header').removeClass('hidden');
    $('.slide-text').removeClass('hidden');
    $('body').removeClass('noscroll');
  }); // がしかし、枠内をクリックでキャンセルさせる

  $('.modal__wrapper').on('click', function (e) {
    e.stopPropagation();
  });
});