import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  @Input('clients') clientsList: Array<any>;
  @Input('listItemClass') listItemClass: string;
  @Input('wrapperClass') wrapperClass: string;

  constructor() { }

  ngOnInit() {
  }

}
