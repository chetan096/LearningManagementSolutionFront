import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course.component';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
 
  courseName:string='';
  errorMessage:string=''
  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit() {

  }

  addCourse(){
      console.log(this.courseName)
      this.courseService.addCourse(this.courseName).subscribe((data:any)=>{
        if (data.status){
          alert("added successfully")
          this.courseName='';
          this.router.navigate(['course'])
        }
        else{
          alert("error adding new course")
        }
      },error=>alert(error))
  }



}
