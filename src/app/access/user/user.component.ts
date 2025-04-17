import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { LoginService } from '../../services/login.service';
// import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [ReactiveFormsModule, SelectButton],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  formGroup!: FormGroup;
  loginaccessvalue!:boolean; 

  stateOptions: any[] = [
      { label: 'Off', value: false },
      { label: 'On', value: true }
  ];

  constructor(private loginBYValue:LoginService){

  }
  senddatavalueforlogin(){
    this.loginBYValue.sendaccessvalue(this.loginaccessvalue);
    // console.log(this.loginaccessvalue);
    this.loginaccessvalue = this.formGroup.value;
  }
  ngOnInit() {
      this.formGroup = new FormGroup({
          value: new FormControl(true)
      });
  }

}
