$(function () {


    $(".slider-new-tel-two").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        swipeToSlide: true,
        dots: true,
        arrows: false
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.slider-new-tel-two').slick('setPosition');
    })

});



