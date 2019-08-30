import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../services/translate.service';

@Pipe({
    name: 'translateDynamic',
    pure: false
})
export class TranslateDynamicPipe implements PipeTransform {

    constructor(
        private translateService: TranslateService
    ) { }

    transform(value: any, args?: any): any {
        console.log(value);
        return;
    }

}
