import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: boolean): any {
    const iconElement = document.createElement('mat-icon');
    iconElement.innerHTML = value ? 'check_circle_outline' : 'cancel';
    return iconElement;
  }

}
