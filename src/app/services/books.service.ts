import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
urldata = 'http://localhost:3000';
result:any;
  constructor(private http:HttpClient) { 
  }
  getlogin(): Observable<any> {
      return this.http.get(`${this.urldata}/login`);
      }

}
