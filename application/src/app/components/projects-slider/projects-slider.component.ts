import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
    inputs: ['slideData']
})
export class ProjectsSliderComponent implements OnInit {

  @Input() slideCategory:string;

  constructor(private dataService: DataService) { }

  slideData: any[];

  ngOnInit() {
      this.getProjectsData();
  }

  getProjectsData() {
      return this.dataService.getProjects()
          .subscribe(data => {
              // Read the result field from the JSON response.
              this.slideData = data['data'];
          });
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
          slidesToScroll: 2,
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
