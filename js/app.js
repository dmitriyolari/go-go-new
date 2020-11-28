$(function () {


  $(".slider-new-tel-three").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
    ]
  });
  $(".slider-new-tel-four").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
 /* $(document).ready(function(){
    $('#myCarousel').carousel({
      pause: true,
      interval: false
    });

  });*/
   $(".carouselExampleIndicators").slick({

   });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider-new-tel-three').slick('setPosition');
  })

});


