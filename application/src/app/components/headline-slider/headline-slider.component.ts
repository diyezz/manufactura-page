import {
    Component,
    OnInit,
    AfterContentInit,
    ViewEncapsulation,
    Input,
    ViewChildren,
    AfterViewInit,
    QueryList, ViewChild, ElementRef, Renderer2, OnDestroy
} from '@angular/core';
import {TranslateService} from '../../services/translate.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-headline-slider',
    templateUrl: './headline-slider.component.html',
    styleUrls: ['./headline-slider.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeadlineSliderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

    @Input() images;
    @Input() projectTitle = 'Project images';
    @Input() fullHeightProp = false;
    @Input() isInfinite = true;
    @Input() isSlideFaded = false;
    @Input() isSlideCovered = false;
    @Input() isPopupAvailable = true;
    @Input() isDesktop = false;
    @Input() inProgress = false;
    @ViewChild('imageModal', {
        read: '', static: true
    }) imageModal: ElementRef;
    @ViewChildren('animatedText') animatedText: QueryList<any>;
    isLoading: boolean;
    isModalShowed: boolean;

    constructor(
        public translateService: TranslateService,
        private renderer: Renderer2,
        private deviceDetectionService: DeviceDetectorService
    ) {}

    ngOnInit() {
        this.isLoading = true;
        this.isDesktop = this.deviceDetectionService.isDesktop();
    }

    ngAfterContentInit() {
    }

    ngAfterViewInit() {
        this.animatedText.changes.subscribe((data) => {
            // console.log(data);
        });
    }

    ngOnDestroy() {
        this.isModalShowed = false;
    }

    startAnimatedText() {
        // this.animatedText.forEach(item => this.animation(item.nativeElement));
    }

    getSliderSettings() {
        return {
            'arrows': true,
            'autoplay': true,
            'autoplaySpeed': 5000,
            'dots': !this.isPopupAvailable,
            'dotsClass': 'slick-dots container',
            'infinite': this.isInfinite || !this.isDesktop,
            'speed': 500,
            // "fade": true,
            // "cssEase": 'linear',
            'slidesToShow': 1,
            'nextArrow': '<button class="slider__arrow-btn slider__arrow-btn--next">></button>',
            'prevArrow': '<button class="slider__arrow-btn slider__arrow-btn--previous"><</button>',
            // "responsive": [
            //     {
            //         "breakpoint": "576",
            //         "settings": {
            //             "arrows": false
            //         }
            //     },
            // ]
        };
    }

    toggleSliderHeight() {
        if (this.isPopupAvailable && !this.isDesktop) {
            this.toggleImageModal(false);
        } else {
            this.fullHeightProp = !this.fullHeightProp;
        }
    }

    onLoad(event) {
        this.isLoading = false;
    }

    animation(elementRef) {
            // array with texts to type in typewriter
            const textValue = elementRef.innerText;

            // type one text in the typwriter
            // keeps calling itself until the text is finished
            function typeWriter(text, i, fnCallback) {
                // check if text isn't finished yet
                if (i < (text.length)) {
                    // add next character to h1
                    elementRef.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

                    // wait for a while and call this function again for next character
                    setTimeout(function() {
                        typeWriter(text, i + 1, fnCallback);
                    }, 300);
                } else if (typeof fnCallback === 'function') {
                    // call callback after timeout
                    setTimeout(fnCallback, 5700);
                }
            }

            // start a typewriter animation for a text in the dataText array
            function startTextAnimation(i) {
                if (typeof textValue === 'undefined') {
                    setTimeout(function() {
                        startTextAnimation(0);
                    }, 20000);
                }
                // check if dataText[i] exists
                // text exists! start typewriter animation
                typeWriter(textValue, 0, function() {
                    // after callback (and whole text has been animated), start next text
                    startTextAnimation(i + 1);
                });
            }

            // start the text animation
            startTextAnimation(0);
    }

    toggleImageModal(closeOnly, event?) {
        if (closeOnly) {
            if (event && (event.target.classList.contains('modal') || event.target.getAttribute('data-dismiss'))) {
                this.renderer.removeClass(this.imageModal.nativeElement, 'show');
                this.isModalShowed = false;
            } else {
                return;
            }
        } else {
            if (this.isModalShowed) {
                this.renderer.removeClass(this.imageModal.nativeElement, 'show');
                this.isModalShowed = false;
            } else {
                this.renderer.addClass(this.imageModal.nativeElement, 'show');
                this.isModalShowed = true;
            }
        }
    }
}
