import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

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
  constructor(private fb:FormBuilder, private router: Router,private booklist:BooksService, private http:HttpClient){
   
  }


  ngOnInit() {
    this.dataget();
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




    
//     const loginData = { username: this.username, password: this.password };
//     this.http.post('http://localhost:3000/login', loginData).subscribe(response => {
//     if (response['status'] === 'success') {
//      alert('Login successful!');
//     } else {
//      alert('Invalid username or password.');
// }
// });
    






  }

  dataget(){
    this.booklist.getlogin().subscribe((res)=>{
      if(res.status){
        console.log("great");
        this.resultdatalist = res;
      }else {
        console.log(res.status);
      }
      
    })
    console.log(this.resultdatalist)
  }


  

}
