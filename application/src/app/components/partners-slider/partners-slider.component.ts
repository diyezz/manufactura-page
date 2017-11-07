import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-partners-slider',
  templateUrl: './partners-slider.component.html',
  styleUrls: ['./partners-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartnersSliderComponent implements OnInit {

  constructor(private dataService:DataService) { }

  slideData: any[];

  ngOnInit() {
    this.getData();
  }

  getData() {
      // Make the HTTP request:
    return this.dataService.getPartners()
        .subscribe(data => {
          // Read the result field from the JSON response.
          this.slideData = data['data'];
        });
  }

}
