import {Component, OnInit, AfterContentInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-headline-slider',
  templateUrl: './headline-slider.component.html',
  styleUrls: ['./headline-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeadlineSliderComponent implements OnInit, AfterContentInit {

    @Input() images;

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit() {}

  getSliderSettings() {
      return {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1
      }
  }
}
