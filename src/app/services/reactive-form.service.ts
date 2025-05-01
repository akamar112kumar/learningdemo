import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
url = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.url}/register`);
    }



  
  
  
  show(){
    console.log(this.url)
  }
}
