jQuery(document).ready(function ($) {

    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('#page-wrapper'),
            didScroll = false,
            changeHeaderOn = 200;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'page-wrapper-shrink');
            } else {
                classie.remove(header, 'page-wrapper-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();




    $(".slides li").each(function (index, element) {
        // element == this
        // store the image link inside a variable from 'src' attribute
        var getImageSrc = $(this).find('img').attr('src');

        // add div background image using the variable above
        $(element).css('background-image', 'url(' + getImageSrc + ')');
    });

    $('.slides li img').remove();

    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,
        directionNav: true
    });
});