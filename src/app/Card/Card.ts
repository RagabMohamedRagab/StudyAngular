import {Component,EventEmitter,Input,OnChanges,OnInit,Output, SimpleChanges} from '@angular/core'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
   selector:"Card-app",
   imports: [CommonModule, RouterLink],
   templateUrl:'./Card.html',
   styleUrls:['./Card.css'],
   standalone:true
})


export class Card implements OnInit,OnChanges{
  
  constructor(private Route:Router){
  
  }
  @Input() Varible :any;
   @Input() index!:number
  @Output() CustomeEvent=new EventEmitter<string>();
  ngOnInit(): void {
    console.log(this.Varible)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
     
  onClickEvent(id:any):void{
    console.log(this.Varible)
    console.log(this.Varible.id)
    this.Route.navigateByUrl(`course-details/${id}`)
    // this.Route.navigate([`course-details/${this.Varible.id}`])
  }
}