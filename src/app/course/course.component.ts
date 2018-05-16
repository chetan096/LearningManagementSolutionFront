import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models/models';
import { CourseService } from './course.service';
import { ActivatedRouteSnapshot,Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:ICourse[];
  courseName:string;
  errorMessage:string;

  constructor(private coureService:CourseService,private router:Router) {
    this.courses=[];
    this.errorMessage='';
   }

  ngOnInit() {
      this.coureService.getCourses().subscribe((data:any)=>{
        console.log(data.courses)
        this.courses=data.courses;
        if(this.courses.length==0){
          alert('No course yet')
        }
      },error =>{
        this.errorMessage = <any>error
        alert(this.errorMessage);
      })
  }

  openAddCoursePage(){
      this.router.navigate(['addCourse'])
  }

  addCourse(){

  }

}
