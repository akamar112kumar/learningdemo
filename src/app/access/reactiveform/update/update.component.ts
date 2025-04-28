import { Component, OnInit } from '@angular/core';
import { ReactiveFormService } from '../../../services/reactive-form.service';

import { FirstLetterCaptitalPipe } from '../../../pipes/first-letter-captital.pipe';
import { TablestyleDirective } from '../../../directives/tablestyle.directive';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-update',
  imports: [FirstLetterCaptitalPipe,TableModule, CommonModule,RouterLink],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
data = [];
dataform:any;
 userForm: FormGroup | undefined;
  constructor(private update:ReactiveFormService, private fb: FormBuilder, private http: HttpClient,private router: Router){
    
  }
  ngOnInit(): void {
    this.getdateforupdate()
  }
  getdateforupdate(){
    this.update.getPosts().subscribe((post)=>{
this.data = post;
// this.dataform.controls['fullName'].setValue(post.fullName);
// this.dataform.controls['username'].setValue(post.username);
// this.dataform.controls['email'].setValue(post.email);
// this.dataform.controls['password'].setValue(post.password);
    });
  }

  // this.employeeForm.controls['EmpName'].setValue(employee.EmpName);  


}
