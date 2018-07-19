import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent implements OnInit {

  @Input('isPositionFooter') isPositionFooter = false;

  constructor() { }

  ngOnInit() {
  }

}
