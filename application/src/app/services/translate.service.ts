import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  localStorageLangKeyName = 'currentLanguage';
  defaultAppLang = 'en';
  currentLang: string;
  langData: any = {};
  languageChangeSubscription: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

    getCurrentLanguage(language: string) {
        const currentUserLang = localStorage.getItem(this.localStorageLangKeyName);

        this.currentLang = language ? language : currentUserLang ? currentUserLang : this.defaultAppLang;

        if (currentUserLang !== this.currentLang) {
            localStorage.setItem(this.localStorageLangKeyName, this.currentLang);
        }
    }

    use(lang?: string): Promise<{}> {
        this.getCurrentLanguage(lang);

        return new Promise<{}>((resolve, reject) => {
            const langPath = `assets/i18n/${this.currentLang}.json`;
            this.http.get<{}>(langPath).subscribe(
                translation => {
                    this.langData = Object.assign({}, translation || {});
                    this.languageChangeSubscription.next(this.currentLang);
                    resolve(this.langData);
                },
                error => {
                    this.langData = {};
                    resolve(this.langData);
                }
            );
        });
    }
}