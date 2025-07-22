import {Component} from '@angular/core'


@Component({
    selector:"NavBar-root",
    imports:[],
    styleUrl:'./NavBar.css',
    templateUrl:"./NavBar.html"
})

export class NavBar{
    TitleHeading:string="Angualr App"

    OnClilkLogo():void{
        alert("Hello world");
    }
}