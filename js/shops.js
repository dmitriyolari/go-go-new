(function() {
    var Shops;

    $(function() {
        return new Shops();
    });

    Shops = (function() {
        function Shops() {
            var _d, date;
            date = new Date();
            _d = date.getTime();
            $('.shops-time').each(function(_n, el) {
                var d, fromH, fromM, i, toH, toM, zeroPad;
                el = $(el);
                i = el.find('i');
                fromH = el.data('fromh');
                fromM = el.data('fromm');
                toH = el.data('toh');
                toM = el.data('tom');
                d = new Date();
                d.setHours(toH, toM);
                d = d.getTime();
                if (d < _d) {
                    i.addClass('text-danger');
                } else if (d - _d < 60 * 60 * 1000) {
                    i.addClass('text-warning');
                }
                zeroPad = function(m, _n) {
                    if (_n == null) {
                        _n = +m;
                    }
                    if (_n < 10) {
                        return "0" + _n;
                    } else {
                        return _n;
                    }
                };
                return el.find('span').html((zeroPad(fromH)) + ":" + (zeroPad(fromM)) + "-" + (zeroPad(toH)) + ":" + (zeroPad(toM)));
            });
        }

        return Shops;

    })();

}).call(this);