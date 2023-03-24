import { Injectable } from '@angular/core';
import { deepLTranslator } from '@shared/deepl';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor() { }

  translateMessage(message: string): void {
    deepLTranslator(message)
      .then((result) => {
        console.log(result)
      }
    )
  }
}
