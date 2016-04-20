jQuery(document).ready(function ($) {

    $(".slides li").each(function (index, element) {
        // element == this
        // store the image link inside a variable from 'src' attribute
        var getImageSrc = $(this).find('img').attr('src');

        // add div background image using the variable above
        $(element).css('background-image', 'url(' + getImageSrc + ')');
    });

    $('.slides li img').remove();

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true
    });
});