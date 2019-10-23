import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  pure: false
})

@Injectable()
export class FilterPipe implements PipeTransform {

    transform(items: any[], field: string, value: string, resetKey: string): any[] {
        if (!items) { return []; }
        if (!value || value.length === 0) { return items; }
        if (value === resetKey) { return items; }
        return items.filter(it =>
            it[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

}
