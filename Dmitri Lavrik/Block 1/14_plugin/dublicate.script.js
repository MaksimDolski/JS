(function ($) {

  $.fn.dublicate = function () {

    // как сделать одинаковый блок по высоте

    function equalsHeight($items) {
      let max = 0;

      $items.each(function () {
        let h = $(this).find('> div').outerHeight();
        // > div - находим перевого ребёнка и находим его высоту
        if (h > max) {
          max = h;
        }
      });

      $items.css('min-height', max + 'px');

    } // equalsHeight function close


  }; // function close

})(jQuery);