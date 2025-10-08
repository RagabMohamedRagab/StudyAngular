import {Component} from '@angular/core'
import { RouterModule } from '@angular/router';


@Component({
    selector:"NavBar-root",
    imports: [RouterModule ],
    styleUrl:'./NavBar.css',
    templateUrl:"./NavBar.html"
})

export class NavBar{
    TitleHeading:string="Angualr App"

    OnClilkLogo():void{
        alert("Hello world");
    }
}