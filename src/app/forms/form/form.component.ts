import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, PanelModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
url = "http://localhost:3000/register";
  text: any = [];
  id: any;
  data: any;
  data1: any=[];
  userForm: FormGroup;
  datalist:any;

  constructor(private fb: FormBuilder, private http: HttpClient, private book:BooksService) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.http.post(this.url, this.data, this.id).subscribe((res) => {
      this.text = res;
    })
    

  }

  onSubmit() {
    if (this.userForm.valid) {
      this.postFormData(this.userForm.value)
    }
  }


  postFormData(formData: any): void {
     this.http.post(this.url, formData)
     .subscribe(response => {
     console.log('Form submitted successfully', response);
     }, error => {
     console.error('Error submitting form', error);
     });
     }


}
