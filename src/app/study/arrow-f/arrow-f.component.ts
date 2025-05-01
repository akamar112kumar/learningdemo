import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-f',
  imports: [],
  templateUrl: './arrow-f.component.html',
  styleUrl: './arrow-f.component.scss'
})
export class ArrowFComponent {
  taditional(){
    console.log("create this")
        
  }

  arrow = ()=>{
    console.log("not create this it has laxical scope automatically")
  }

  

}
