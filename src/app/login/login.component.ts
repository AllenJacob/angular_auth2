import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SignupService } from '../signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  title:String="Login"
  loginUserDetails={
    email:"",
    password:""
  }
  
  
  constructor(private signupservice:SignupService,private router:Router) {}

  login(){
    this.signupservice.loginUser(this.loginUserDetails)
    .subscribe(
      res=>{
        
        this.router.navigate(['/'])
        console.log(res)
        
      },
      err=>{
        alert("You  have not registered ")
        this.router.navigate(['/signup'])
      }
    )
      
    
    
  }
  ngOnInit(): void {
  }

  
  

}
