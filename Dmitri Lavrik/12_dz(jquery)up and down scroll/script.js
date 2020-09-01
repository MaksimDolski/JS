$(function () {
  $('.menu a').on('click', function (event) {
    event.preventDefault();

    let selector = $(this).attr('href'); // string - #header1
    let h = $(selector); // $('#header');

    $('html, body').animate({
      scrollTop: h.offset().top // offset - отступа от верхнего края
    }, 2000);
  });


  // Scroll up button
  $('.btn').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

});