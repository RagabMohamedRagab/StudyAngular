import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

@Component({
    selector:'app-Register',
    imports:[FormsModule,JsonPipe],
    templateUrl:'./Regsiter.Component.html',
    styleUrls:['./Regsiter.Component.css','../LoginForm/Login.Component.css']
})

export class RegisterComponent{

register(registerForm:any):void{
    console.log(registerForm);
}
}