import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'particles.js';
import { environment } from "../../../environments/environment";

declare let particlesJS: any;

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class IndexComponent implements OnInit {

    constructor() {
    }

    slideCategoryName: string = 'all';
    selectedItem: number = 0;

    images = [
        {
            image: `${environment.baseUrl}assets/img/original/2.jpg`,
            text: {
                headline: 'Build your dreams',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsa perspiciatis repellendus!'
            }
        },
        {
            image: `${environment.baseUrl}assets/img/original/1.jpg`,
            text: {
                headline: 'Make your dreams come true',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsa perspiciatis repellendus!'
            }
        }
    ];

    filters = [
        {name: 'all'},
        {name: 'buildings'},
        {name: 'interiors'}
    ];

    ngOnInit() {
        particlesJS.load('particles-js', 'assets/mock-data/particlesJs-config.json');
    }

    changeCategory(event, newValue) {
        this.slideCategoryName = event.target.innerText.toLowerCase();
        this.selectedItem = newValue;
    }
}
