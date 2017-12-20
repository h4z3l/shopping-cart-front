import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trunc'
})
export class TruncatePipe implements PipeTransform {
    transform(value: any, length: number): any {
        if (!value || value.length === 0)
            return;
        return value.substring(0, length);
    }
}
