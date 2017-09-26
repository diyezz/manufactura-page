$(document).ready(function(){

    setBackgroundFromSource('slider__slide', 'slider__slide-background');

    $('.slider__slides-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: false
    });
});

function setBackgroundFromSource(container, background) {
    var parentClass = $('.' + container);
    var bgClass = $('.' + background);

    parentClass.each(function() {
        var srcAttr = $(this).find(bgClass).attr('src');
        $(this).css('background-image', 'url('+ srcAttr +')');
    });
}