import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../translate.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    socialList = [
        {'facebook': 'https://www.facebook.com/'},
        {'twitter': 'https://www.twitter.com/'},
        {'instagram': 'https://www.instagram.com/'},
        {'googlePlus': 'https://www.google.com/'},
        {'youtube': 'https://www.youtube.com/'},
        {'pinterest': 'https://www.pinterest.com/'}
    ];

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    setLang(lang: string) {
        this.translate.use(lang);
    }

    checkCurrentLang(lang) {
        return this.translate.currentLang === lang;
    }

}
