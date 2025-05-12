import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { subscribe } from 'node:diagnostics_channel';

@Component({
  selector: 'app-login',
  imports: [RouterLink,PanelModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  userForm!: FormGroup;
  username: string = '';
  password: string = '';
  resultdatalist:any;

  datalist:any;

  data:any
  constructor(private fb:FormBuilder, private router: Router,private booklist:BooksService, private http:HttpClient){
   
  }


  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      });
  }

  onSubmit(){
    // if (this.username === this.username && this.password === this.password) {
    //   // Successful login
    //   localStorage.setItem('isAuthenticated', 'true');
    //   this.router.navigate(['/home']);
    //     alert('success');
    //     console.log(this.resultdatalist.username)
    // } else {
    //   this.router.navigate(['/forms']); 
    //   alert("error having while access")
    // }


    this.booklist.getlogin().subscribe((res)=>
    this.datalist = res)

    
    if (this.userForm.valid) {
        const headers = new HttpHeaders().set('X-API-KEY', this.datalist);
        this.http.post('YOUR_API_ENDPOINT', this.userForm.value, { headers }).subscribe(
            response => {
                // Handle successful login
                console.log('Login successful', response);
            },
            error => {
                // Handle login error
                console.error('Login failed', error);
            }
        );
    }






  }




  

}
