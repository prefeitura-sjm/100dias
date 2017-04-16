var $doc = $('html, body');
$('.anchor').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 500);
    return false;
});
