import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../../models/project";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EditProjectsService {

    constructor(private httpClient: HttpClient) {
    }

    loadAllProjects(): Observable<any> {
        const url: string = `${environment.baseUrl}assets/mock-data/projects-slides.json`;

        return this.httpClient
            .get(url);
    }

    updateProject(project: Project) {
        console.log(project);
    }

    createProject(project: Project) {
        console.log(project);
    }
}
