$(function () {


  $(".slider-new-tel-three").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    variableWidth: true,
  });
  $(".slider-new-tel-four").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    variableWidth: true,
  });

});

document.querySelector('.news-item.nav-link').click();