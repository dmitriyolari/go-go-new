$(function () {


  $(".slider-new-tel-three").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    prevArrow: '<img class="a-left slick-prev" src="../img/slick-prev.png" alt="">',
    nextArrow: "<img class='a-right slick-next' src='../img/slick-next.png' alt=''>"
  });
  $(".slider-new-tel-four").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
  });


});