import {Component, OnInit} from '@angular/core';
import {TranslateService} from "../../services/translate.service";
import {environment} from "../../../environments/environment";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    defaultEnvironment = environment;
    socialList: Array<any>;
    currentYear: number = new Date().getFullYear();

    constructor(
        private translate: TranslateService,
        private dataService: DataService) {
    }

    ngOnInit() {
        this.getCompanySocialListData();
    }

    setLang(lang: string) {
        this.translate.use(lang);
    }

    getCompanySocialListData() {
        return this.dataService.getCompanySocialList().subscribe((data) => {
            this.socialList = data;
        })
    }

    checkCurrentLang(lang) {
        return this.translate.currentLang === lang;
    }

}
