import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Project} from "../models/project";

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    getProjects(): Observable<Project[]> {
        const url: string = 'http://localhost:3000/projects';
        return this.httpClient.get(url).pipe(
            map((res) => this.extractData(res)),
            catchError(error => this.handleError(error))
        );
        /*
        * Solution for production with not working save/edit
        */
        // return this.productionApiRequest('projects');
    }

    //Create project
    createProject(project: Project): Observable<any> {
        const url: string = 'http://localhost:3000/projects';
        let cpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        let options = {headers: cpHeaders};
        return this.httpClient.post<Project>(url, project, options).pipe(
            map(success => console.log(success)),
            catchError(this.handleError)
        );
    }

    //Update article
    updateProject(project: Project): Observable<number> {
        const url: string = 'http://localhost:3000/projects';
        let cpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        let options = {headers: cpHeaders};
        return this.httpClient.put(url + "/" + project.id, project, options).pipe(
            map(success => success['status']),
            catchError(this.handleError)
        );
    }

    //Delete project by id
    deleteProjectById(projectId: string): Observable<number> {
        const url: string = 'http://localhost:3000/projects';
        let cpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        let options = {headers: cpHeaders};
        return this.httpClient.delete(url + "/" + projectId).pipe(
            map(success => success['status']),
            catchError(this.handleError)
        );
    }


    getPartners() {
        const url: string = 'http://localhost:3000/partners';
        return this.httpClient.get(url).pipe(
            map((res) => this.extractData(res)),
            catchError(error => this.handleError(error))
        );
        /*
        * Solution for production with not working save/edit
        */
        // return this.productionApiRequest('partners');
    }

    getAllTeam() {
        const url: string = 'http://localhost:3000/team';
        return this.httpClient.get(url).pipe(
            map((res) => this.extractData(res)),
            catchError(error => this.handleError(error))
        );
        /*
        * Solution for production with not working save/edit
        */
        // return this.productionApiRequest('team');
    }

    getAwards() {
        const url: string = 'http://localhost:3000/awards';
        return this.httpClient.get(url).pipe(
            map((res) => this.extractData(res)),
            catchError(error => this.handleError(error))
        );
        /*
        * Solution for production with not working save/edit
        */
        // return this.productionApiRequest('awards');
    }

    private extractData(res: Response | any) {
        let body = res;
        return body;
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return throwError(error.status);
    }

    private productionApiRequest(apiName: string): Observable<any> {
        const url: string = `${environment.baseUrl}assets/mock-data/db.json`;

        return this.httpClient.get(url).pipe(
            map((res) => this.extractData(res[apiName])),
            catchError(error => this.handleError(error))
        );
    }

}
