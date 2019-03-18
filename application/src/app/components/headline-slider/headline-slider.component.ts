import {
    Component,
    OnInit,
    AfterContentInit,
    ViewEncapsulation,
    Input,
    ViewChildren,
    AfterViewInit,
    QueryList
} from '@angular/core';
import {TranslateService} from "../../services/translate.service";

@Component({
    selector: 'app-headline-slider',
    templateUrl: './headline-slider.component.html',
    styleUrls: ['./headline-slider.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeadlineSliderComponent implements OnInit, AfterContentInit, AfterViewInit {

    @Input() images;
    @Input() isInfinite: boolean = false;
    @Input() fullHeightProp: boolean = false;
    @Input() isSlideFaded: boolean = false;
    @Input() isSlideCovered: boolean = false;
    @ViewChildren('animatedText') animatedText: QueryList<any>;
    isLoading: boolean;

    constructor(
        public translateService: TranslateService
    ) {}

    ngOnInit() {
        this.isLoading = true;
    }

    ngAfterContentInit() {
    }

    ngAfterViewInit() {
        this.animatedText.changes.subscribe((data) => {
            console.log(data);
        })
    }

    startAnimatedText() {
        this.animatedText.forEach(item => this.animation(item.nativeElement));
    }

    getSliderSettings() {
        return {
            "arrows": true,
            "autoplay": false,
            "autoplaySpeed": 5000,
            "dots": true,
            "dotsClass": 'slick-dots container',
            "infinite": this.isInfinite,
            "speed": 500,
            // "fade": true,
            // "cssEase": 'linear',
            "slidesToShow": 1,
            "nextArrow": '<button class="slider__arrow-btn slider__arrow-btn--next">></button>',
            "prevArrow": '<button class="slider__arrow-btn slider__arrow-btn--previous"><</button>',
            // "responsive": [
            //     {
            //         "breakpoint": "576",
            //         "settings": {
            //             "arrows": false
            //         }
            //     },
            // ]
        }
    }

    toggleSliderHeight() {
        this.fullHeightProp = !this.fullHeightProp;
    }

    onLoad(event) {
        this.isLoading = false;
    }

    animation(elementRef) {
        console.log(elementRef);
            // array with texts to type in typewriter
            let textValue = elementRef.innerText;

            // type one text in the typwriter
            // keeps calling itself until the text is finished
            function typeWriter(text, i, fnCallback) {
                // check if text isn't finished yet
                if (i < (text.length)) {
                    // add next character to h1
                    elementRef.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

                    // wait for a while and call this function again for next character
                    setTimeout(function() {
                        typeWriter(text, i + 1, fnCallback)
                    }, 300);
                }
                // text finished, call callback if there is a callback function
                else if (typeof fnCallback == 'function') {
                    // call callback after timeout
                    setTimeout(fnCallback, 5700);
                }
            }

            // start a typewriter animation for a text in the dataText array
            function StartTextAnimation(i) {
                if (typeof textValue == 'undefined'){
                    setTimeout(function() {
                        StartTextAnimation(0);
                    }, 20000);
                }
                // check if dataText[i] exists
                // text exists! start typewriter animation
                typeWriter(textValue, 0, function(){
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
            }

            // start the text animation
            StartTextAnimation(0);
    }
}
