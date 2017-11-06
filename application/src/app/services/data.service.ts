import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    const url:string = 'http://localhost:4040/assets/mock-data/projects-slides.json';

    return this.httpClient
        .get(url);
  }

  getPartners() {
    const url:string = 'http://localhost:4040/assets/mock-data/partners-slides.json';
    return this.httpClient
        .get(url);
  }

}
