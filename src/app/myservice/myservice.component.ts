import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  getImages()
  {
    return this.http.get('http://localhost:3000/data')
  }
}
