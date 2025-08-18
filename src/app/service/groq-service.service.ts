import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroqServiceService {
   private apiUrl = 'http://localhost:8080/groq/ask';

  constructor(private http: HttpClient) {}

  askGroq(prompt: string): Observable<string> {
    return this.http.get(this.apiUrl, {
      params: { q: prompt },
      responseType: 'text' // since backend returns plain string
    });
  }
}
