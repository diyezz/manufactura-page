import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeLetters'
})
export class TypeLettersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
