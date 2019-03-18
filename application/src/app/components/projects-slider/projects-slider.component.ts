import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-projects-slider',
    templateUrl: './projects-slider.component.html',
    styleUrls: ['./projects-slider.component.scss'],
    // encapsulation: ViewEncapsulation.None,
    inputs: ['slideData']
})
export class ProjectsSliderComponent implements OnInit {
    @Input() slideCategory: string;
    @ViewChild('slickModal') slick;
    slideData: any[];

    constructor(
        private dataService: DataService
    ) {
    }


    ngOnInit() {
        this.getProjectsData();
    }

    getProjectsData() {
        return this.dataService.getProjects()
            .subscribe(data => {
                // Read the result field from the JSON response.
                this.slideData = data;
            });
    }

    afterChange(event) {
        console.log(event);
        // this.slick.unslick();
    }

    getSliderSettings() {
        return {
            "arrows": false,
            "autoplay": true,
            "autoplaySpeed": 3000,
            "dots": true,
            "dotsClass": 'slick-dots slick-dots--red',
            "infinite": false,
            "speed": 300,
            "slidesToShow": 4,
            "slidesToScroll": 2,
            "responsive": [
                {
                    "breakpoint": "1025",
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": "769",
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": "576",
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                },
            ]
        }
    }

}
