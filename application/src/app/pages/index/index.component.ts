import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'particles.js';
import {environment} from "../../../environments/environment";
import {TranslateService} from "../../services/translate.service";

declare let particlesJS: any;

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class IndexComponent implements OnInit {
    defaultEnvironment = environment;

    constructor(
        public translateService: TranslateService
    ) {
    }

    slideCategoryName: string = 'all';
    selectedItem: number = 0;

    images = [
        {
            image: `${environment.baseUrl}assets/img/original/8.jpg`,
            text: {
                headline: {
                    en: 'Create whatever you want',
                    ru: 'Создавайте всё, что пожелаете',
                    ua: 'Створюйте все, що бажаєте'
                },
                description: {
                    en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsa perspiciatis repellendus!',
                    ru: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
                    ua: 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. '
                }
            },
        },
        {
            image: `${environment.baseUrl}assets/img/original/9.jpg`,
            text: {
                headline: {
                    en: 'Build your dreams',
                    ru: 'Постройте вашу мечту',
                    ua: 'Побудуйте вашу мрію'
                },
                description: {
                    en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsa perspiciatis repellendus!',
                    ru: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
                    ua: 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. '
                }
            }
        },
        {
            image: `${environment.baseUrl}assets/img/original/10.jpg`,
            text: {
                headline: {
                    en: 'Don\'t be afraid to experiment',
                    ru: 'Не бойтесь экспеременитровать',
                    ua: 'Не бійтесь експерементувати'
                },
                description: {
                    en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsa perspiciatis repellendus!',
                    ru: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
                    ua: 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. '
                }
            }
        }
    ];

    texts = {
        title: {
            en: 'We are\n the most\n dedicated\n architects',
            ru: 'Мы\n самые\n преданные\n архитекторы',
            ua: 'Ми\n найбільш\n віддани\n архітектори'
        },
        fullText: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi cum ipsa perferendis\n ' +
                'quis sunt totam. Autem cum dolor enim facilis harum illum saepe sunt suscipit. Delectus enim\n' +
                'error temporibus! \n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur in nam neque officiis\n' +
                'repellendus?\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum eum iure?',
            ru: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
            ua: 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п\'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною.'
        }
    };

    filters = [
        {name: 'all'},
        {name: 'buildings'},
        {name: 'interiors'}
    ];


    ngOnInit() {
        particlesJS.load('particles-js', 'assets/mock-data/particlesJs-config.json');
    }

    changeCategory(event, newValue) {
        this.slideCategoryName = this.filters[newValue].name;
        this.selectedItem = newValue;
    }

    dateCounter(type) {
        const startDate = new Date(2014, 9, 7);
        const currentDate = new Date();

        let diff = Math.floor(currentDate.getTime() - startDate.getTime());
        const day = 1000 * 60 * 60 * 24;
        const month = 1000 * 60 * 60 * 24 * 29.82;
        const year = 1000 * 60 * 60 * 24 * 29.82 * 12;

        let days = Math.floor(diff / day);
        let months = Math.floor(diff / month);
        let years = Math.floor(diff / year);
        let diffInDays = Math.floor((diff - (year * years)) / day);

        if (type === 'years') {
            return years
        } else if (type === 'days') {
            return diffInDays
        }
    }
}
