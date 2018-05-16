import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { CourseService } from '../../course/course.service';
import { ICourse } from '../../../models/models';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subjectName:string;
  courses:ICourse[];
  courseId:number;
  constructor(private subjectService: SubjectService,private router:Router,private courseService:CourseService) { 
    this.courses=[];
    this.courseId=-1;
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe((data)=>{
        this.courses=data.courses;
        let course={id:this.courseId,name:'Please select one'}
        this.courses.unshift(course);
    })
  }

  addSubject() {
    
    this.subjectService.addSubject(this.subjectName,this.courseId).subscribe((data) => {
      if (data.status) {
        alert('subject added successfully')
      }
      else {
        alert('Error adding subject')
        this.router.navigate([''])
      }
      this.subjectName = '';
      this.router.navigate(['subject'])
    },error=>{
      alert(error)
    })
  }
}
