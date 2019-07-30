import { Component, OnInit } from '@angular/core';
import {MyService} from '../my.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  routee;product;id;
  name:string='';fill;
  pro: Object;
  constructor(private api:MyService,private route:ActivatedRoute) { }
  ngOnInit() {
    
    this.routee = this.route.params.subscribe(params=>
      {
        
        this.id=params['id'];
        this.name=params['name'];
        
        if( typeof(this.name)!='undefined')
        { 
          const data={
            id:this.id,
            name:this.name
          }
          this.api.getProduct1(data).subscribe(resp=>
          {
            this.product=resp;
          },
          error=>
          {
            alert("not found");
          })

        }
        else{
        this.api.getProduct(this.id).subscribe(resp=>
          {
            this.product=resp;
          },
          error=>
          {
            alert("not found");
          })
        }
      });
    
  }
filling()
{
    this.fill=document.getElementsByName('filter').value;
    this.api.getAllPro(this.fill).subscribe(resp=>
      {
        this.pro=resp;
      },
      error=>
      {
        alert("No Product Found");
      })
}


}
