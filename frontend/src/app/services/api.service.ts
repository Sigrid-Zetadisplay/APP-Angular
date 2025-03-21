import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'; // Proxy will route this to http://localhost:5000

  constructor(private http: HttpClient) {}

  getHelloMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }
}
