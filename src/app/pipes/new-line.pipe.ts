import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak'
})
export class NewLinePipe implements PipeTransform {
  transform(value: any): string {
    if (Array.isArray(value)) {
      value = value.join(' ');
    }
    return value.replace(/\n/g, '<br/>');
  }

}
