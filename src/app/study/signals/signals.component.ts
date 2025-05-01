import { Component, signal } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  count = signal(3);

  setfunctiuon(){
    this.count.set(30);
  }
  updata(){
    this.count.update(count=>count - 50);
  }
}
