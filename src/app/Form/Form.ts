import {Component} from '@angular/core'


@Component({
    selector:"Form-root",
    imports:[],
    templateUrl:'./Form.html',
    styleUrls:['./Form.css']
})

export class Form{
    obj={
      title:"Angualr Test"
    }
    img:string =""
    KeyUpFun(title:string):void{
        this.obj.title=title;
    }
    
}