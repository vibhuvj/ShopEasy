import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }
  getdata()
  {
    return this.http.get("http://localhost:3000/data");
  }
  getProduct(id)
  {
    return this.http.get("http://localhost:3000/productById/"+id);
  }
  getProduct1(data)
  {
    return this.http.post("http://localhost:3000/productByIdname/",data);
  }
  getAllPro(fill)
  {
    return this.http.get("http://localhost:3000/productBy/",fill);
  }
}