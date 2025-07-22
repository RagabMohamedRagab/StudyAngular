import {Component,EventEmitter,Input,Output} from '@angular/core'


@Component({
   selector:"Card-app",
   templateUrl:'./Card.html',
   styleUrls:['./Card.css']
})


export class Card{
  @Input() Varible:customer={} as customer;
   @Input() index!:number
  @Output() CustomeEvent=new EventEmitter<string>();


  onClickEvent():void{
    this.CustomeEvent.emit("Ragab Mohamed")
  }
}