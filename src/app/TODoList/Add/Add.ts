import {Output, Component, EventEmitter } from "@angular/core";



@Component({
selector:"Add-app",
templateUrl:'./Add.html',
styleUrls:['./Add.css']

})


export class Add{
    @Output() EventSendToParent=new EventEmitter<string>();
  GetValue():void{
    var val=document.getElementById('note') as HTMLInputElement ;
    this.EventSendToParent.emit(val.value);
  }
}