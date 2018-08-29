import {Component, OnInit} from '@angular/core';
import {EditProjectsService} from "../../services/edit-projects.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-edit-projects',
    templateUrl: './edit-projects.component.html',
    styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {
    allProjects;
    selectedProject;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);
    date = new FormControl(new Date());

    constructor(private editProjectsService: EditProjectsService) {
    }

    ngOnInit() {
        this.loadAllProjects();
    }

    loadAllProjects() {
        this.editProjectsService.loadAllProjects().subscribe((data) => {
            this.allProjects = data.data;
            console.log(data.data);
        });
    }

    onSelect(project) {
        this.selectedProject = project;
    }

    deserializeDate(value) {
       return new Date(value)
    }

}
