import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class LoginService {
accessbahavoir = new BehaviorSubject<boolean>(true);
  constructor() { }
  ngOnInit(){

  }
sendaccessvalue(data:boolean){
  this.accessbahavoir.next(data);
  // console.log(this.accessbahavoir.value)
}
getbehaviourvalue(){
  return this.accessbahavoir.asObservable();
}

}
