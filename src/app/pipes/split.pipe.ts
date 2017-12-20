import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {
    transform(value: any, size: number): any[] {
        const arr = [];
        for (let i = 0; i < value.length; i += size) {
            arr.push(value.slice(i, i + size));
        }
        return arr;
    }
}
