// Add your answer here
$(function() {
    $('.lesson').hover(
      function() {
        $(this).find('.text-contents').addClass('text-active');
      },
      function() {
        $(this).find('.text-contents').removeClass('text-active');
      }
    );
  });
