import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../../models/project';

@Injectable()
export class EditProjectsService {

    constructor(private httpClient: HttpClient) {
    }

    updateProject(project: Project) {
        console.log(project);
    }

    createProject(project: Project) {
        console.log(project);
    }
}
