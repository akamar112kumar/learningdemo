import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent {
  data: any;
  username: string = '';
  password: string = '';
  id:any;
  behaviourdatasave!:boolean;
  test:any;
  urldata = 'http://localhost:3000/users';
  constructor(private router: Router, private http: HttpClient, private loginservicedisplay:LoginService) {
    this.http.get(this.urldata).subscribe((response)=>{
      this.test = response;
    });

    this.http.post(this.urldata,this.id).subscribe((response) => {
});
  }
  ngOnInit(): void {
// console.log(this.test)
    this.getbehaviourdata();
    this.fetchData();
    // console.log("text test",this.behaviourdatasave)
    }
   
    fetchData() {
      fetch(this.urldata) // Replace with your API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.data = data;
          this.username = data.username;
          this.password = data.password;
          // console.log(this.data);  // Log or handle the data
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
  
  login() {
    console.log(this.username)
    // Implement your login logic here
          
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);
    if (this.username === this.username && this.password === this.password) {
      // Successful login
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/home']);
        alert('success');

    } else {
      this.router.navigate(['/login']); 
      alert("error having while access")
    }
  }
getbehaviourdata(){
  this.loginservicedisplay.getbehaviourvalue().subscribe((data)=>{
    this.behaviourdatasave = data;
  });
}
}
