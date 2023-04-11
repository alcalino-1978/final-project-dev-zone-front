import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  constructor(private http: HttpClient) { }

  completions(message: string) {
    console.log(message)
    return this.http.post(`${environment.urlBase}/gpt-3/message`, { prompt: message });
    // return this.http.post('http://localhost:3000/v1/gpt-3/message', { prompt: message });
  }
}
