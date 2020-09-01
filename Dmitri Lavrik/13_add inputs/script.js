$(function () {

  $('.btn').on('click', function () {
    let $div = $('<div>').addClass('item');
    $('<input>').attr('type', 'text').addClass('check').appendTo($div);
    $('.items').append($div);

  });

});