import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() { }

  getFakeData(): Observable<any> {
    const fakeData = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
    ];
    return of(fakeData);
  }
}
