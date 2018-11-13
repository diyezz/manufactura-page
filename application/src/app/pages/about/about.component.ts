import { Component, OnInit } from '@angular/core';
import { environment } from "environments/environment";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  image1 = environment.baseUrl + '/assets/img/team-photos/team-photo-example.jpg';
  personsData;
  awards;

  constructor(
      private dataService: DataService
  ) { }

  ngOnInit() {
      this.dataService.getAllTeam().subscribe(data => this.personsData = data);
      this.dataService.getAwards().subscribe(data => this.awards = data);
  }

}
