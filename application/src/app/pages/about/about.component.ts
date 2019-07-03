import {Component, OnInit} from '@angular/core';
import {environment} from 'environments/environment';
import {DataService} from '../../services/data.service';
import {TranslateService} from "../../services/translate.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    image1 = environment.baseUrl + '/assets/img/team-photos/team-photo-example.jpg';
    currentLangText;
    personsData;
    awards;
    subscription: Subscription;

    aboutUsTexts = {
        "en": {
            "aboutUsHeadText": {
                "firstString": "Manufactura aims to bring the latest trends and best quality products to their customers. There is a\n" +
                        "huge emphasis on passing on knowledge and making Manufactura designs a ‘go-to’ for any information\n" +
                        "or inspirations for your home or business. To do that, a qualified, enthusiastic, nimble team is a\n" +
                        "must.",
                "secondString": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem commodi, consequuntur corporis\n" +
                        "distinctio ducimus ea earum, eos, et illo magnam molestiae perferendis qui quisquam quod repellat\n" +
                        "repellendus voluptatum. Consequuntur dolores eum exercitationem in laudantium natus nostrum omnis\n" +
                        "ratione sed?"
            },
            "becomePartOfTeam": {
                "headline": "Want to became a part of our team?",
                "firstString": "Manufactura is always looking to the future, so we are always happy to invite to our team young\n" +
                        "talented people with aspiration to\n" +
                        "development and to realization new architectural projects.",
                "secondString": "If you are young and creative, and you want to became a part of our team, just apply to contact\n" +
                        "form on our career page",
            }
        },
        "ru": {
            "aboutUsHeadText": {
                "firstString": "Manufactura стремится предлагать своим клиентам самые последние тенденции и продукцию самого высокого качества. Особое внимание уделяется передаче знаний и созданию «Мануфактуры» для любой информации или идей для вашего дома или бизнеса. Для этого необходима квалифицированная, энергичная и энергичная команда.",
                "secondString": ""
            },
            "becomePartOfTeam": {
                "headline": "Хотите стать частью нашей команды?",
                "firstString": "Мануфактура всегда смотрит в будущее, поэтому мы всегда рады пригласить в нашу команду молодых талантливых людей, стремящихся к развитию и реализации новых архитектурных проектов.",
                "secondString": "если вы молоды и креативны и хотите стать частью нашей команды, просто подайте заявку на контактную форму на нашей странице контактов",
            }
        },
        "ua": {
            "aboutUsHeadText": {
                "firstString": "Мануфактура прагне принести своїм клієнтам останні тенденції та найкращу якість продукції. Існує величезний наголос на передачі знань і розробці мануфактури для створення будь-якої інформації або натхнення для вашого будинку або бізнесу. Для цього необхідна кваліфікована, захоплена, гнучка команда.",
                "secondString": ""
            },
            "becomePartOfTeam": {
                "headline": "Хочете стати частиною нашої команди?",
                "firstString": "Мануфактура завжди дивиться в майбутнє, тому ми завжди раді запросити до нашої команди молодих талановитих людей з прагненням до розробки і реалізації нових архітектурних проектів.",
                "secondString": "якщо ви молоді і творчі, і ви хочете стати частиною нашої команди, просто зверніться до контактної форми на нашій сторінці контактів"
            }
        }
    };

    constructor(
        private dataService: DataService,
        private translateService: TranslateService
    ) {
    }

    getDataForCurrentLanguage() {
        this.currentLangText = this.aboutUsTexts[this.translateService.currentLang];
        this.subscription = this.translateService.languageChangeSubscription.subscribe((value) => {
            this.currentLangText = this.aboutUsTexts[value];
        })
    }

    ngOnInit() {
        this.dataService.getAllTeam().subscribe(data => this.personsData = data);
        this.dataService.getAwards().subscribe(data => this.awards = data);

        this.getDataForCurrentLanguage()
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
