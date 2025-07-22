import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import {NavBar} from '../NavBar/NavBar';
import { Form } from '../Form/Form'
import {Card} from '../Card/Card'
import {List} from '../TODoList/List/List'
@Component({
  selector: 'ragab-root',
  imports:[NavBar,Form,Card, List,CommonModule],
  templateUrl: './app.html',
  styleUrls:['./app.scss']
})
export class App {
  protected title = 'FutureCode';
// ده الاوبجكت الا هتبعته الى  child Component .. 
  share:customer[]=[{id:1,name:"A1"},{id:2,name:"A2"},{id:3,name:"A3"}]

obj1={
    name:"Ragab" ,
    id:123,
    age:12
  }
   obj3={
     name:"Eslam" ,
    id:123,
    age:12
  }
   obj2={
     name:"Mahmoud" ,
    id:123,
    age:12
  };
   course=[
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
  ClickInParent(val:string):void{
    console.log("I Click From app",val);
  }
}
