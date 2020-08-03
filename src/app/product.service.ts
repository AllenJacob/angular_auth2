import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  pid="";
  editItem=<any>[]
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteProduct(id){
    return this.http.post("http://localhost:3000/delete",{"pid":id})
  }
  addtocart(id){
    return this.http.post("http://localhhost:3000/cart",{"pid":id})
  }
  
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
