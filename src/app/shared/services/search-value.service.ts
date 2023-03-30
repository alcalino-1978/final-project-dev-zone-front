import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchValueService {

  private filterValue: string = '';
  private filterValueSubject = new Subject<string>;

  constructor() { }


  getData(data: string) {
     this.filterValue = data as string;
     this.filterValueSubject.next(this.filterValue);
    // console.log(this.filterValue + 'estoy en el servicio');
  }

  sendData(): Observable<string> {
    return this.filterValueSubject.asObservable();
  }
}
