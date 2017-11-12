import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtercompl',
    pure: false
})

export class CompletedPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item["completed"]);
    }
}