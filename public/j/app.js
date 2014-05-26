$(document).ready(function() {
    var jumpShown = false;
    var showOffset = $('header').height();
    var $jump = $('#jump-top-container');
    $('.slab').slabText({});
    $('a').smoothScroll();
    $(window).on('scroll', function(e) {
        var offset = $(this).scrollTop();
        if(jumpShown) {
            if (offset < showOffset) {
                $jump.hide();
                jumpShown = false;
            }
        } else {
            if (offset > showOffset) {
                $jump.show();
                jumpShown = true;
            }
        }
    });
});
