import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { UserModel } from '../signup/signup.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   title:String = "Signup";
   newUser = new UserModel(null,null);
   constructor(private signupService: SignupService,private router:Router) { }
  
  AddUser()
  {
    this.signupService.newRegUser(this.newUser);
    console.log("Added new user");
    alert("Success");
    this.router.navigate(['/login']);
  }


  ngOnInit(): void {
  }
  
}
