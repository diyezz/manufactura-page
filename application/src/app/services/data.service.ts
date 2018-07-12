import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    const url:string = `${environment.baseUrl}assets/mock-data/projects-slides.json`;

    return this.httpClient
        .get(url);
  }

  getPartners() {
    const url:string = `${environment.baseUrl}assets/mock-data/partners-slides.json`;
    return this.httpClient
        .get(url);
  }

}
