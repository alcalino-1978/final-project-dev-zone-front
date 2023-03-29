import { JobOfferModel } from './../../models/joboffer.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: JobOfferModel[], args: string = ''): JobOfferModel[] {

    if(!value)return [];
    if(!args)return value;

    args = args?.toLowerCase() ?? '';

    return value.filter((item: JobOfferModel) => {
        return JSON.stringify(item)
        .toLowerCase()
        .includes(args);
    });
  }

}
