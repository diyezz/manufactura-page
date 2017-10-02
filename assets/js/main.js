$(document).ready(function(){

    setBackgroundFromSource('slider__slide', 'slider__slide-background');
    setBackgroundFromSource('about-us__one-of-work', 'about-us__one-of-work-background');
    setBackgroundFromSource('projects__image-wrapper', 'projects__slide-background');

    $('.slider__slides-wrapper').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1
    });

    $('.projects__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            ]
    })
});

function setBackgroundFromSource(container, background) {
    var parentClass = $('.' + container);
    var bgClass = $('.' + background);

    parentClass.each(function() {
        var srcAttr = $(this).find(bgClass).attr('src');
        $(this).css('background-image', 'url('+ srcAttr +')');
    });
}