import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {
    defaultEnvironment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
