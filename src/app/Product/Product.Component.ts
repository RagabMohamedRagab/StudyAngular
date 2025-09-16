import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { IProduct } from "../Models/Product";
import { baseUrl } from "../Shared/UrlRequest";
import { Observable } from "rxjs";
import { CommonModule } from '@angular/common';   

@Component({
    selector:"Product-app",
    imports: [CommonModule],
    styleUrls: ['./Product.Component.css'],
    templateUrl:'./Product.Component.html'
})

export class Product implements OnInit{
      http=inject(HttpClient);
      AllProducts?:IProduct
  ngOnInit(): void {
    console.log("start")
      this.http.get(`${baseUrl}/products/5`).subscribe({
        next:data=>{
            console.log(data)
            this.AllProducts=data as IProduct
        }
      });
  }
}