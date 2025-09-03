import  {Component,Input, OnChanges, OnInit, SimpleChanges}  from "@angular/core";
import { timer } from "rxjs";


@Component({
    selector:"Nour-app",
    imports:[],
    styleUrls:['./Nourhan.css'],
    templateUrl:'./Nourhan.html'
})

export class Nourhan implements OnChanges,OnInit{
  @Input() ragab!:string ;   

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {

    console.log(this.ragab);
  }
}