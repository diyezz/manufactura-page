import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "../../services/data.service";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsDetailComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private dataService: DataService
  ) { }

  currentProject;

  getProject(id: number) {
      return this.dataService.getProjects().pipe(
          map(projects => projects['data'].filter(project => project.id === id))
      ).subscribe(data => this.currentProject = data[0]);
  }

  getProjectById() {
      this.route.paramMap
          .subscribe((params: ParamMap) => this.getProject(+params.get('id')));
  }

  ngOnInit() {
    this.getProjectById();
  }

  goBack(): void {
      this.location.back();
  }
}
