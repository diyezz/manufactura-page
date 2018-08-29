import {Component, OnInit} from '@angular/core';
import {EditProjectsService} from "../../services/edit-projects.service";

@Component({
    selector: 'app-edit-projects',
    templateUrl: './edit-projects.component.html',
    styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {

    constructor(private editProjectsService: EditProjectsService) {
    }

    ngOnInit() {
        this.loadAllProjects();
    }

    loadAllProjects() {
        this.editProjectsService.loadAllProjects().subscribe((data) => console.log(data));
    }

}
