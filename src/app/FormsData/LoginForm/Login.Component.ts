import {Component} from '@angular/core'
import {FormsModule, NgForm} from '@angular/forms'

@Component({
    selector:'app-login',
    imports:[FormsModule],
    templateUrl:'./Login.Component.html',
    styleUrls:['./Login.Component.css']
})

export class LoginComponent{
    login(loginForm:NgForm):void{
        console.log(loginForm);
    }

}