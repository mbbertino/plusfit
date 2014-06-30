$(window).resize(function() {
  $('.signup').css({
    position: 'absolute',
    left: ($(window).width() - $('.signup').outerWidth()) / 2,
    top: ($(window).height() - $('.signup').outerHeight()) / 2
  });
});