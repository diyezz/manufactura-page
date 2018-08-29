import { Component, OnInit, AfterContentInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'app-headline-slider',
    templateUrl: './headline-slider.component.html',
    styleUrls: ['./headline-slider.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeadlineSliderComponent implements OnInit, AfterContentInit {

    @Input() images;
    @Input() isInfinite: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    getSliderSettings() {
        return {
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: this.isInfinite,
            speed: 500,
            // fade: true,
            // cssEase: 'linear',
            slidesToShow: 1,
            nextArrow: '<button class="slider__arrow-btn slider__arrow-btn--next"> ></button>',
            prevArrow: '<button class="slider__arrow-btn slider__arrow-btn--previous"> <</button>'
        }
    }
}
