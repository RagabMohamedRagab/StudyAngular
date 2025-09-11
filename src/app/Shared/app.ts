import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common'
import {NavBar} from '../NavBar/NavBar';
import { Form } from '../Form/Form'
import {Card} from '../Card/Card'
import {List} from '../TODoList/List/List'
import {Life} from '../LifeCycle/Life'
import {Nourhan} from '../../NourhanLife/Nourhan'
import { timer } from 'rxjs';


@Component({
  selector: 'ragab-root',
  imports: [NavBar, RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrls:['./app.scss']
})
export class App implements OnChanges,OnInit{
     fuck="I Will Fuck "
  protected title = 'FutureCode';
// ده الاوبجكت الا هتبعته الى  child Component .. 
  share:customer[]=[{id:1,name:"A1"},{id:2,name:"A2"},{id:3,name:"A3"}]
data="Angualr";
date=new Date();
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

  ClickInParent(val:string):void{
    console.log("I Click From app",val);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,'appp')
  }
  SharedData="Ragab Mohamed Shared Data ";
  ngOnInit(): void {
    timer(3000).subscribe(()=>this.fuck="Again")
    timer(3000).subscribe(()=>this.SharedData="dddddddddAgain")

    console.log("ini")
  }

}
