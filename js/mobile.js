(function() {
    var SelectBtn;

    $(function() {
        $('#filter').on('change', function() {
            return $(this).closest('form').submit();
        });
        /*
            $('.m-main-slider .swiper-slide').each(function(n, el) {
              var $el, img;
              $el = $(el);
              img = $el.find('img').attr('src');
              return $el.css({
                'background-image': "url(" + img + ")"
              });
            });
        */

        $(document).ready(function () {

            var mainPageSwiper = new Swiper ('.m-main-slider .swiper-container', {
                direction: 'horizontal',
                loop: false,
                pagination: $('.swiper-pagination', '.m-main-slider .swiper-container'),
                nextButton: $('.swiper-button-next', '.m-main-slider .swiper-container'),
                prevButton: $('.swiper-button-prev', '.m-main-slider .swiper-container')
            });

            var sections = new Swiper ('.filter-carusel-scroll.swiper-container', {

                loop: false,
                slidesPerView: 3,
//           pagination: $('.swiper-pagination', '.m-main-slider .swiper-container'),
                nextButton: $('.arrow-right', '.filter-carusel'),
                prevButton: $('.arrow-left', '.filter-carusel')
            });


        });

        return new SelectBtn('#filter');
    });

    SelectBtn = (function() {
        SelectBtn.prototype.template = '<div class="select-btn">РџРѕРєР°Р·Р°С‚СЊ:&nbsp;<span></span></div>';

        function SelectBtn(select) {
            this.select = select;
            this.select = $(this.select);
            this.html = $(this.template);
            this.select.before(this.html);
            this.select.css({
                opacity: 0,
                position: 'absolute',
                top: this.html.position().top,
                left: this.html.position().left,
                width: this.html.outerWidth(),
                height: this.html.outerHeight()
            });
            this.select.change((function(_this) {
                return function() {
                    return _this.setLabel();
                };
            })(this));
            this.setLabel();
        }

        SelectBtn.prototype.setLabel = function() {
            var label, option;
            option = $('option:selected', this.select);
            label = option.html();
            return this.html.find('span').html(label);
        };

        return SelectBtn;

    })();

}).call(this);