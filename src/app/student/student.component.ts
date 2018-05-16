import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent, IBAtch } from '../../models/models';
import { Router, ActivatedRoute } from '@angular/router';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:IStudent[];
  errorMessage:string;
  studentId:number;
  batches:IBAtch[];
  constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute) {
    this.batches=[];
   }

  ngOnInit() {
     this.studentService.getStudents().subscribe((data:any)=>{
            this.students=data.students;
            console.log(this.students)
            if(this.students.length==0){
              alert('No students enrolled yet');
            }
     },error=>{
       this.errorMessage=<any>error;
     })
  }
  openAddStudentPage(){
    this.router.navigate(['addStudent']);
  }
}
