import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-projects-all',
    templateUrl: './projects-all.component.html',
    styleUrls: ['./projects-all.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsAllComponent implements OnInit {
    allProjects;
    slideCategory: string = 'all';

    constructor(
        private route: ActivatedRoute,
        private location: Location,
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
                this.allProjects = data;
            });
    }

    goBack(): void {
        this.location.back();
    }

    changeCategory() {
        if (this.slideCategory === 'all') {
            this.slideCategory = 'building';
        } else if (this.slideCategory === 'building') {
            this.slideCategory = 'interiors';
        } else if (this.slideCategory === 'interiors') {
            this.slideCategory = 'all';
        }
    }
}
