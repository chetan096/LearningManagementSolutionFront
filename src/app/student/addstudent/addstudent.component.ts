import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddStudentComponent implements OnInit {

  studentName:string;
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
       
  }

  addStudent(){
     this.studentService.addStudent(this.studentName).subscribe((data)=>{
             if(data.status){
               alert('student added successfully')
             }
             else{
               alert('Error adding student')
             }
             this.studentName='';
             this.router.navigate(['student'])
     })
  }

}
