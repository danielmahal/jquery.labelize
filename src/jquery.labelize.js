/* Labelizer jQuery plugin by Daniel Mahal and Simen Brekken (http://github.com/danielmahal) */

(function($) {
    $.fn.labelize = function(options) {
        var settings = {
            focusClass: 'has-focus',
            valueClass: 'has-value'
        };

        $.extend(settings, options);

        return $(this).each(function() {
            var $input = $(this);
            var $label = $('label[for=' + $input.attr('id') + ']');
            var $elements = $input.add($label);

            $input.on('keyup change', function(e) {
                $elements.toggleClass(settings.valueClass, !!$input.val().length)
            });

            $input.on('focus blur', function() {
                $elements.toggleClass(settings.focusClass, !!$input.is(':focus'));
            });
        });
    }
})(jQuery);
