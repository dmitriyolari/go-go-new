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
    });


    const tabsBtn   = document.querySelectorAll(".footer-nav-item");
    const tabsItems = document.querySelectorAll(".tab-pane");

    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if ( ! currentBtn.classList.contains('active') ) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }

        });
    };

});



