var jumpShown = false,
    showOffset = $('header').height(),
    $jump = $('#jump-top-container');
$('#home h1').slabText({});
$('a').smoothScroll();
$(window).on('scroll', function(e) {
    var offset = $(this).scrollTop();
    console.log(offset);
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
})