import { Component, HostBinding, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsDetailComponent implements OnInit {
    currentProject: any;
    isMobileDevice: boolean;

    @HostBinding('class.empty') emptyComponentClass = true;

    @HostListener('window:resize', []) onWindowResize() {
        this.checkCurrentDeviceInfo();
    }

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private dataService: DataService,
        private deviceDetectorService: DeviceDetectorService,
        public locationService: LocationService
    ) {
    }

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

    checkCurrentDeviceInfo() {
        this.isMobileDevice = !this.deviceDetectorService.isDesktop();
    }

    checkDescriptionInformation(currentProject) {
        return !currentProject.client
            && !currentProject.date
            && !currentProject.projectType
            && !currentProject.architects;
    }

    goBack(): void {
        this.location.back();
    }

    ngOnInit() {
        this.getProjectById();
        this.checkCurrentDeviceInfo();
    }
}
