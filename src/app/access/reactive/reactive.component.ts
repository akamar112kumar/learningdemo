import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';

import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule,PanelModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
url = "http://localhost:3000/register";
text:any;
id:any;
data:any;
  userForm: FormGroup;

   constructor(private fb: FormBuilder,private http:HttpClient) {
     this.userForm = this.fb.group({
  fullName: ['', Validators.required],
username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
email: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
confirmPassword: ['', Validators.required],
acceptTerms: [false, Validators.requiredTrue]
 });



 this.http.post(this.url,this.data,this.id).subscribe((res)=>
{
this.text = res;
})

 }
 
 onSubmit() {
 if (this.userForm.valid) {
  //  console.log('Form Submitted!', this.userForm.value);
   console.log(this.text.userForm)
  }
  }
  
}
