import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DataService} from "../../../../services/data.service";
import {Project} from "../../../../models/project";

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

    constructor(private editProjectsService: DataService) {
    }

    ngOnInit() {
        this.loadAllProjects();
    }

    loadAllProjects() {
        this.editProjectsService.getProjects().subscribe((data) => {
            this.allProjects = data;
        });
    }

    createNewProject() {
        const project: Project = {
            "header": "New project!",
            "id": this.setProjectId(),
            "city": "Odessa",
            "description": "Brand design of small cafe in center of city. What have done in the best way with highest materials and other cool stuff.",
            "link": "",
            "date": new Date(),
            "cover": "https://manufactura-d8bb1.firebaseapp.com/assets/img/original/2.jpg",
            "images": [
                {
                    "image": "https://manufactura-d8bb1.firebaseapp.com/assets/img/original/2.jpg"
                },
                {
                    "image": "https://manufactura-d8bb1.firebaseapp.com/assets/img/original/1.jpg"
                }
            ],
            "category": "buildings",
            "fullDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur expedita facere illo molestiae soluta. A aliquid architecto autem consequatur corporis cum deserunt doloremque ducimus exercitationem impedit laborum modi porro, quae quam recusandae reprehenderit ullam veniam? Accusamus architecto aut beatae consectetur cum cumque deleniti dolore dolorem doloremque eligendi facere labore maiores modi odio, porro, praesentium provident quam quod ratione recusandae reprehenderit rerum sit soluta sunt suscipit, totam ullam voluptatum! Alias aliquid asperiores aspernatur, autem, cum dolor dolorum eius error et excepturi, facere fuga fugiat id inventore iste iure iusto officiis omnis praesentium quas quis quod repellat sunt tempora totam veniam vitae voluptas voluptate voluptatem voluptatibus! Aut commodi corporis distinctio, dolore eaque labore laboriosam, molestias odit quasi repudiandae saepe totam ullam, vitae?"
        };
        this.editProjectsService.createProject(project).subscribe();
    }

    updateProject(project: Project) {
        this.editProjectsService.updateProject(project).subscribe();
    }

    removeProject(projectId) {
        this.editProjectsService.deleteProjectById(projectId).subscribe();
    }

    setProjectId() {
        let id: number;
        this.editProjectsService.getProjects().subscribe((data) => {
            let maxIndex = data.length - 1;
            let articleWithMaxIndex = data[maxIndex];
            id = articleWithMaxIndex.id + 1;
        });
        return id;
    }

    onSelect(project) {
        this.selectedProject = project;
    }

    deserializeDate(value) {
       return new Date(value)
    }

}
