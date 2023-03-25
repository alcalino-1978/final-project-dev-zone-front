import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  constructor(private http: HttpClient) { }

  completions(message: string) {
    console.log(message)
    return this.http.post('http://localhost:3000/v1/gpt-3/message', { prompt: message });
  }
}
