import { Component, Input, input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { __param } from "tslib";

@Component({
  selector:"Coursedetails.app",
  styleUrl:'./Coursedetails.Component.css',
   templateUrl:"./Coursedetails.Component.html"
})


export class Coursedetails implements OnInit{
   constructor(private activeroute:ActivatedRoute,private route:Router){}
   @Input() id?:string;
   ngOnInit(): void {
       var id=this.activeroute.snapshot.paramMap.get('id')
       console.log("parameterMap",id);
       var courseId=this.activeroute.snapshot.params['id']
       console.log(courseId)

      this.activeroute.params.subscribe(res=>{
         console.log("Param",res)
      })
      this.activeroute.paramMap.subscribe(res=>{
         console.log("ParamMap",res);
      })
      console.log("Id",this.id)
   }
   GetNext():void{
      this.route.navigateByUrl(`course-details/${5}`)
   }
}