$(function () {
  $('.quetion').on('click', function () {
    let thisAnswer = $(this).next();
    thisAnswer.slideToggle('slow');
    $('.answer').not(thisAnswer).slideUp('slow');

  });

});