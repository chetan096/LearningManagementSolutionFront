import { Component, OnInit } from '@angular/core';
import { ITeacher, ISubject } from '../../../../../models/models';
import { LectureComponent } from '../lecture.component';
import { LectureService } from '../lecture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../../../teacher/teacher.service';
import { SubjectService } from '../../../../subject/subject.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-addlecture',
  templateUrl: './addlecture.component.html',
  styleUrls: ['./addlecture.component.css']
})
export class AddlectureComponent implements OnInit {

  teachers:ITeacher[];
  subjects:ISubject[];
  courseId:number;
  batchId:number;
  errorMessage:string;
  subjectId:number;
  teacherId:number;
  lectureName:string;

  constructor(private lectureService:LectureService,private route:ActivatedRoute,
    private teacherService:TeacherService,private subjectService:SubjectService,private router:Router) {
    this.teachers=[];
    this.subjects=[];
    this.teacherId=-1;
    this.subjectId=-1;
   }

  ngOnInit() {
        this.route.queryParams.subscribe((params)=>{
          let p=0;
          this.courseId=+params.courseId;
          this.batchId=+params.batchId;
          if (isNaN(this.courseId) || this.courseId < 1 || this.courseId === void (0)) {
             alert('Invalid course id ');
            p=1;
          }
          else if(isNaN(this.batchId) || this.batchId < 1 || this.batchId === void (0)){
            alert('Invalid batch id')
            p=1;
          }
          if(p==1){
            this.router.navigate(['course'])
            return;
          }

        
          this.teacherService.getTeachers().subscribe((data: any) => {
            this.teachers = data.teachers;
            let teacher:ITeacher={id:this.teacherId,name:'Please Select One'}
            this.teachers.unshift(teacher)

            if (this.teachers.length == 0) {
              alert('No teachers found')
              return;
            }
            this.subjectService.getSubjects().subscribe((data:any)=>{
              this.subjects = data.subjects;
              let subject:ISubject={id:this.subjectId,name:'Please Select One'}
              this.subjects.unshift(subject)
              if (this.subjects.length == 0) {
                alert('No subject yet')
                return;
              }    
            },error=>{
              this.errorMessage = <any>error
            alert(this.errorMessage);
            this.router.navigate(['/course'])
            })
          }, error =>{
            this.errorMessage = <any>error
            alert(this.errorMessage);
            this.router.navigate(['/course'])
          })
      })  
  }

  addLecture(){
     this.lectureService.addLecture(this.lectureName,this.courseId,this.teacherId,this.batchId,this.subjectId)
     .subscribe((data)=>{
          this.teacherId=-1;
          this.lectureName='';
          this.subjectId=-1;
          if(data.status){
            alert('Added Lecture Sucessfully')
          }
          else{
            alert('Error Adding lecture')
          }
     }, error =>{
      this.errorMessage = <any>error
      alert(this.errorMessage);
      // this.router.navigate(['/course'])
    })
  }

}
