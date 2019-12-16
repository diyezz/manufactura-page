import { Component, OnInit } from '@angular/core';
import 'particles.js';
import { environment } from '../../../environments/environment';
import { TranslateService } from '../../services/translate.service';
import { DataService } from '../../services/data.service';

declare let particlesJS: any;

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
    defaultEnvironment = environment;
    clients = [];

    constructor(
        public translateService: TranslateService,
        private dataService: DataService
    ) {
    }

    slideCategoryName = 'all';
    selectedItem = 0;

    images = [
        {
            image: `${environment.baseUrl}assets/img/projects/pizzasteakyuzhny/pizzaSteak_1.jpg`,
            text: {
                headline: {
                    en: 'Create whatever you want',
                    ru: 'Создавайте всё, что пожелаете',
                    ua: 'Створюйте все, що бажаєте'
                },
                description: {
                    en: 'We are ready to help you implement all your ideas.',
                    ru: 'Мы готовы помочь вам осуществить все ваши идеи',
                    ua: 'Ми готові допомогти вам здійснити всі ваші ідеї'
                }
            },
        },
        {
            image: `${environment.baseUrl}assets/img/projects/jarimcoffee/17.jpg`,
            text: {
                headline: {
                    en: 'Build your dreams',
                    ru: 'Постройте вашу мечту',
                    ua: 'Побудуйте вашу мрію'
                },
                description: {
                    en: 'To realize a dream, the most important thing is to start.',
                    ru: 'Чтобы реализовать мечту необходимо самое главное - начать',
                    ua: 'Щоб реалізувати мрію необхідно найголовніше - почати'
                }
            }
        },
        {
            image: `${environment.baseUrl}assets/img/projects/modernflatdesign/1.jpg`,
            text: {
                headline: {
                    en: 'Don\'t be afraid to experiment',
                    ru: 'Не бойтесь экспеременитровать',
                    ua: 'Не бійтесь експерементувати'
                },
                description: {
                    en: 'Innovations come in experiments',
                    ru: 'Инновации приходят в экспериментах',
                    ua: 'Інновації приходять в експериментах'
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
            en: 'Our goal is to help you create the most comfortable space for your business or for you personally, which will be maximally functional, and in the meantime match your taste and requirements. We are eager to create and implement the most unusual projects.',
            ru: 'Наша цель помочь Вам создать максимально комфортное пространство для вашего бизнеса или же лично для Вас, которое будет максисмально функциональным, и тем временем соответсвовать вашему вкусу и требованиям. Мы горим желанием создавать и воплощать в жизнь самые необычные проекты.',
            ua: 'Наша мета допомогти Вам створити максимально комфортний простір для вашого бізнесу або ж особисто для Вас, яке буде максісмально функціональним, і тим часом відповідати вашому смаку і вимогам. Ми горимо бажанням створювати і втілювати в життя самі незвичайні проекти.'
        }
    };

    filters = [
        { name: 'all' },
        { name: 'architecture' },
        { name: 'interiors' },
        { name: 'commercial' },
        { name: 'houses/flats' }
    ];


    ngOnInit() {
        particlesJS.load('particles-js', 'assets/mock-data/particlesJs-config.json');
        this.getClientsListData();
    }

    getClientsListData() {
        return this.dataService.getClientsList().subscribe((data) => {
            this.clients = data;
        });
    }

    changeCategory(event, newValue) {
        this.slideCategoryName = this.filters[newValue].name;
        this.selectedItem = newValue;
    }

    dateCounter(type) {
        const startDate = new Date(2014, 9, 7);
        const currentDate = new Date();

        const diff = Math.floor(currentDate.getTime() - startDate.getTime());
        const day = 1000 * 60 * 60 * 24;
        const month = 1000 * 60 * 60 * 24 * 29.82;
        const year = 1000 * 60 * 60 * 24 * 29.82 * 12;

        const days = Math.floor(diff / day);
        const months = Math.floor(diff / month);
        const years = Math.floor(diff / year);
        const diffInDays = Math.floor((diff - (year * years)) / day);

        if (type === 'years') {
            return years;
        } else if (type === 'days') {
            return diffInDays;
        }
    }
}
