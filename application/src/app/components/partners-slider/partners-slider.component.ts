import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-partners-slider',
  templateUrl: './partners-slider.component.html',
  styleUrls: ['./partners-slider.component.scss']
})
export class PartnersSliderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  slideData: any[];

  ngOnInit() {
    this.getData();
  }

  getData() {
      // Make the HTTP request:
    return this.http.get('http://localhost:4040/assets/mock-data/partners-slides.json').subscribe(data => {
          // Read the result field from the JSON response.
          this.slideData = data['data'];
      });
  }

}
