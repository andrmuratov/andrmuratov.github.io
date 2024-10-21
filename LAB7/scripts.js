$(document).ready(function(){
    $('.slider').slick({
        dots: true,                // Показ точек навигации
        infinite: true,            // Бесконечная прокрутка
        slidesToShow: 3,           // Показывать 3 изображения на экране
        slidesToScroll: 1,         // Прокручивать по 1 изображению
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>',
        responsive: [
            {
                breakpoint: 768,    // Экран шириной до 768px
                settings: {
                    slidesToShow: 1, // Показывать 1 изображение на экране
                    slidesToScroll: 1
                }
            }
        ]
    });
});
