/*global $ */

$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        nextArrow: "<button type=\"button\" class=\"slick-next\">→</button>",
        prevArrow: "<button type=\"button\" class=\"slick-prev\">←</button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 1,
        slidesToShow: 3
    });
});
