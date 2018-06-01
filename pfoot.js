
$(document).ready(function () {
    
    $('.footer-outer').css('border', '0');
    
    if (window.location.href !== 'http://www.red-stone-rising.com/') {
        $('.column-right-outer').hide();
        $('.fauxcolumn-inner').hide();
        $('.column-center-inner').css('width', '800px');
        $('.post-outer').css('width', '800px');
        $('.post-outer').css('padding-left', '50px');
        $('.blog-pager').hide();
        $('#HTML1').hide();
        $('#Text1').hide();
        $('feed-links').hide();
        $('post-footer').hide();
    } else {
        $('.column-right-outer').show();
        $('.fauxcolumn-inner').show();
        $('.blog-pager').show();
        $('#HTML1').show();
        $('#Text1').show();
        $('feed-links').show();
        $('post-footer').show();
    }
});

