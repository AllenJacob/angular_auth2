import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  newRegUser(user)
  {
    return this.http.post("http://localhost:3000/signup",{"signup":user})
    .subscribe(data =>{console.log(data)})
  }
  loginUser(user){
    return this.http.post("http://localhost:3000/login",user)
  }
}
