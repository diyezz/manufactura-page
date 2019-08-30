import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Project} from '../models/project';

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    //Create project
    createProject(project: Project): Observable<any> {
        const url = 'http://localhost:3004/projects';
        const cpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        const options = {headers: cpHeaders};
        return this.httpClient.post<Project>(url, project, options).pipe(
            map(success => console.log(success)),
            catchError(this.handleError)
        );
    }

    //Update article
    updateProject(project: Project): Observable<number> {
        const url = 'http://localhost:3004/projects';
        const cpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        const options = {headers: cpHeaders};
        return this.httpClient.put(url + '/' + project.id, project, options).pipe(
            map(success => success['status']),
            catchError(this.handleError)
        );
    }

    //Delete project by id
    deleteProjectById(projectId: string): Observable<number> {
        const url = 'http://localhost:3004/projects';
        const cpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        const options = {headers: cpHeaders};
        return this.httpClient.delete(url + '/' + projectId).pipe(
            map(success => success['status']),
            catchError(this.handleError)
        );
    }

    getProjects(): Observable<Project[]> {
        if (isDevMode()) {
            const url = 'http://localhost:3004/projects';
            return this.httpClient.get(url).pipe(
                map((res) => this.extractData(res)),
                catchError(error => this.handleError(error))
            );
        } else {
            return this.productionApiRequest('projects');
        }
    }
    getPartners() {
        if (isDevMode()) {
            const url = 'http://localhost:3004/partners';
            return this.httpClient.get(url).pipe(
                map((res) => this.extractData(res)),
                catchError(error => this.handleError(error))
            );
        } else {
            return this.productionApiRequest('partners');
        }
    }
    getAllTeam() {
        if (isDevMode()) {
            const url = 'http://localhost:3004/team';
            return this.httpClient.get(url).pipe(
                map((res) => this.extractData(res)),
                catchError(error => this.handleError(error))
            );
        } else {
            return this.productionApiRequest('team');
        }

    }
    getAwards() {
        if (isDevMode()) {
            const url = 'http://localhost:3004/awards';
            return this.httpClient.get(url).pipe(
                map((res) => this.extractData(res)),
                catchError(error => this.handleError(error))
            );
        } else {
            return this.productionApiRequest('awards');
        }

    }
    getCompanySocialList() {
        if (isDevMode()) {
            const url = 'http://localhost:3004/companySocialList';
            return this.httpClient.get(url).pipe(
                map((res) => this.extractData(res)),
                catchError(error => this.handleError(error))
            );
        } else {
            return this.productionApiRequest('companySocialList');
        }
    }

    /**
     * Uncomment for prod version.
     * NOT NEEDED ANYMORE
     */
    // getProjects(): Observable<any[]> {
    //     return this.productionApiRequest('projects');
    // }
    // getPartners() {
    //     return this.productionApiRequest('partners');
    // }
    // getAllTeam() {
    //     return this.productionApiRequest('team');
    // }
    // getAwards() {
    //     return this.productionApiRequest('awards');
    // }
    // getCompanySocialList() {
    //     return this.productionApiRequest('companySocialList');
    // }


    private extractData(res: Response | any) {
        const body = res;
        return body;
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return throwError(error.status);
    }

    private productionApiRequest(apiName: string): Observable<any> {
        const url = `${environment.baseUrl}assets/mock-data/db.json`;

        return this.httpClient.get(url).pipe(
            map((res) => this.extractData(res[apiName])),
            catchError(error => this.handleError(error))
        );
    }

}
