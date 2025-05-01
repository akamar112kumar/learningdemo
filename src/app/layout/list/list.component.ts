import { Component } from '@angular/core';


import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FirstLetterCaptitalPipe } from '../../pipes/first-letter-captital.pipe';
import { ReactiveFormService } from '../../services/reactive-form.service';

@Component({
  selector: 'app-list',
  imports: [FirstLetterCaptitalPipe,TableModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  data = [];
dataform:any;
 userForm: FormGroup | undefined;
constructor(private update:ReactiveFormService, private fb: FormBuilder, private http: HttpClient){}
ngOnInit(): void {
  this.getdateforupdate()
}
getdateforupdate(){
  this.update.getPosts().subscribe((post)=>{
this.data = post;
  });
}
show(){
  console.log(this.data);
}
}
