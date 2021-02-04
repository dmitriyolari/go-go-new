(function() {
    $(function() {
        $('.navbar-toggle').click(function(e) {
            e.preventDefault();
            return $('body').toggleClass('nav-visible');
        });
        $('.nav-search-btn').click(function(e) {
            var $input, body, className;
            e.preventDefault();
            body = $('body');
            className = 'search-visible';
            if (!body.hasClass(className)) {
                body.addClass(className);
                return setTimeout(function() {
                    return $('.nav-search-input input').focus();
                }, 200);
            } else {
                $input = $('#search_form').find('[name="keyword"]');
                if ($input.val()) {
                    return $('#search_form').submit();
                } else {
                    return $('body').removeClass('search-visible');
                }
            }
        });
        return $('.nav-search-close').click(function(e) {
            e.preventDefault();
            return $('body').removeClass('search-visible');
        });
    });

}).call(this);