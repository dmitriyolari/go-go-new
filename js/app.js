$(function () {


    $(".slider-new-tel-two").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        swipeToSlide: true
    });
    /* $(document).ready(function(){
       $('#myCarousel').carousel({
         pause: true,
         interval: false
       });

     });*/

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.slider-new-tel-two').slick('setPosition');
    })

});


