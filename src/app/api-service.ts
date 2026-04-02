import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient){}

getproducts(){
return this.http.get("https://dummyjson.com/products")

}
getitem(id: number){
return this.http.get(`https://dummyjson.com/products/${id}`)

}
}
