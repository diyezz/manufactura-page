import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-headline-slider',
  templateUrl: './headline-slider.component.html',
  styleUrls: ['./headline-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeadlineSliderComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
      this.setBackgroundFromSource('slider__slide', 'slider__slide-background');

      $('.slider__slides-wrapper').slick({
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1
      });
  }

  setBackgroundFromSource(container, background) {
      let parentClass = $('.' + container);
      let bgClass = $('.' + background);

      parentClass.each(function() {
          let srcAttr = $(this).find(bgClass).attr('src');
          $(this).css('background-image', 'url('+ srcAttr +')');
      });
  }
}
