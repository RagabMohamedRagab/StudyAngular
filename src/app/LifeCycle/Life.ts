import {AfterContentInit, Component, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core'






@Component({
    selector:"Life-app",
    imports:[],
    styleUrl:'Life.css',
    templateUrl:'Life.html'
})

export class Life implements OnChanges,AfterContentInit{
    @Input() Test:any;

   ngOnChanges(changes: SimpleChanges): void {
       console.log(changes);
   }
   ngAfterContentInit(): void {
       console.log("initial")
   }
}