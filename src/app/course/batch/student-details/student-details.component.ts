import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../../models/models';
import { BatchService } from '../batch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  students:IStudent[];
  courseId:number;
  batchId:number;
  errorMessage:string;

  constructor(private batchService:BatchService,private route:ActivatedRoute,private router:Router) { }

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
      this.batchService.getStudents(this.batchId,this.courseId).subscribe((data:any)=>{
            this.students=data.students;
            console.log(data)
            if(this.students.length==0){
              alert('No student in this batch')
            }
         
      },error=>{
        this.errorMessage=<any>error;
        alert(this.errorMessage)
      })
    })
    
  }

  addStudentsToBatch(){
    this.router.navigate(['student']);
  }
}


