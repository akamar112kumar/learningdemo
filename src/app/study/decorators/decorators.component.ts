import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-decorators',
  imports: [DatePipe],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss',
    
})
export class DecoratorsComponent {



    
    purchasedOn = '2024-07-08';
  
  today: Date = new Date();
date: any;


}
