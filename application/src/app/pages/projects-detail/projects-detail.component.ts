import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {map} from "rxjs/operators";
import {LocationService} from "../../services/location.service";
import {LoadingService} from "../../services/loading.service";

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsDetailComponent implements OnInit {

    @HostBinding('class.empty') emptyComponentClass: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private dataService: DataService,
        public locationService: LocationService
    ) {
    }

    currentProject;

    getProject(id: number) {
        return this.dataService.getProjects().pipe(
            map(projects => projects.filter(project => project.id === id))
        ).subscribe(data => {
            this.currentProject = data[0];
            this.emptyComponentClass = !this.currentProject;
            }
        );
    }

    getProjectById() {
        this.route.paramMap
            .subscribe((params: ParamMap) => this.getProject(+params.get('id')));
    }

    ngOnInit() {
        this.getProjectById();
    }

    goBack(): void {
        this.location.back();
    }
}
