import  {Component,Input, OnChanges, OnInit, SimpleChanges}  from "@angular/core";
import { timer } from "rxjs";

import {Card} from '../app/Card/Card'


@Component({
    selector:"Nour-app",
    imports:[Card],
    styleUrls:['./Nourhan.css'],
    templateUrl:'./Nourhan.html'
})

export class Nourhan implements OnChanges,OnInit{
  
  @Input() ragab!:string ;   
 courses=[
      {
        id:1,
        name:'Angular Dev'
      },
      {
        id:2,
        name:'React Js'
      },{
        id:3,
        name:'Javascript'
      }
   ];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {

    console.log(this.ragab);
  }
  onClickEvent(){
    
  }
}