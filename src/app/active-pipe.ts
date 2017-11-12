import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filteractive',
    pure: false
})

export class ActivePipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => !item["completed"]);
    }
}