import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'particles.js';
declare let particlesJS: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class IndexComponent implements OnInit {

  constructor() { }

  slideCategoryName:string = 'all';
  selectedItem:number = 0;

  filters = [
      {name: 'all'},
      {name: 'buildings'},
      {name: 'interiors'}
  ];

  ngOnInit(){
    particlesJS.load('particles-js', 'assets/mock-data/particlesJs-config.json');
  }

  changeCategory(event, newValue) {
    this.slideCategoryName = event.target.innerText.toLowerCase();
    this.selectedItem = newValue;
  }
}
