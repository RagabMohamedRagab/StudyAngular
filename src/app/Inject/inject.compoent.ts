import { Component, OnInit } from "@angular/core";
import { CourseService } from "../Service/CourseService.Component";


@Component({
selector:"inject-root",
styleUrl:'./inject.compoent.css',
templateUrl:'./inject.compoent.html'
})


export class Inject implements OnInit{
  constructor(private courseservice:CourseService){}  
  
  ngOnInit(): void {
      this.courseservice.SayHello();
  }

}

