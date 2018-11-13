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
    defaultEnvironment = environment;

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

    dateCounter(type) {
        const startDate = new Date(2014, 9, 7);
        const currentDate = new Date();

        let diff = Math.floor(currentDate.getTime() - startDate.getTime());
        const day = 1000 * 60 * 60 * 24;
        const month = 1000 * 60 * 60 * 24 * 29.82;
        const year = 1000 * 60 * 60 * 24 * 29.82 * 12;

        let days = Math.floor(diff/day);
        let months = Math.floor(diff/month);
        let years = Math.floor(diff/year);
        let diffInDays = Math.floor((diff-(year * years))/day);

        if (type === 'years') {
            return years
        } else if (type === 'days') {
            return diffInDays
        }
    }
}
