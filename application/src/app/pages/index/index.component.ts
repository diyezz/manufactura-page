import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  ngOnInit(){
    particlesJS.load('particles-js', 'assets/mock-data/particlesJs-config.json');
  }

}
