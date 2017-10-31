import {AfterContentInit, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsSliderComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private http: HttpClient) { }

  slideData: any[];

  ngOnInit() {
      // Make the HTTP request:
      this.http.get('http://localhost:4040/assets/mock-data/projects-slides.json').subscribe(data => {
          // Read the result field from the JSON response.
          this.slideData = data['data'];
      });
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {

      this.setBackgroundFromSource('about-us__one-of-work', 'about-us__one-of-work-background');
      this.setBackgroundFromSource('projects__image-wrapper', 'projects__slide-background');

      this.initSlick();
  }

  setBackgroundFromSource(container, background) {
      let parentClass = $('.' + container);
      let bgClass = $('.' + background);

      parentClass.each(function() {
          let srcAttr = $(this).find(bgClass).attr('src');
          $(this).css('background-image', 'url('+ srcAttr +')');
      });
  }

  initSlick(){
      $('.projects__slider').slick(this.getSliderSettings());
  }

  updateSlick() {
      $('.projects__slider').slick(this.getSliderSettings());
  }

  getSliderSettings() {
      return {
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
      }
  }

}
