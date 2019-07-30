import { Component, OnInit } from '@angular/core';
import {MyService} from '../my.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items;
  constructor(private api:MyService) { }
  
  ngOnInit() {
    return this.api.getdata().subscribe(resp=>
      {
        this.items=resp;
      })
  }

}
