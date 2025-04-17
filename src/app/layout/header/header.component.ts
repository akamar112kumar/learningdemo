import { Component, Input } from '@angular/core';
import { UserComponent } from '../../access/user/user.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input() va:string | undefined;
@Input() dataFromParent: string | undefined;
loginaccessdata!:string;

constructor(){

}



}
