import { Component } from "@angular/core";
import { Add } from "../Add/Add";

@Component({
 selector :'List-app',
 imports:[Add],
 templateUrl:'./List.html',
 styleUrls:['./List.css']
})


export class List{
    arr:string[]=[];

    AddToNotes(event:string):void{
      this.arr.push(event);
      var List=document.getElementById('list') as HTMLDataListElement
      var element=document.createElement('li');
      var text=document.createTextNode(event);
      element.append(text);
      List.appendChild(element);
    }
}