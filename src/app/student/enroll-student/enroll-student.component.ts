import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { IBAtch } from '../../../models/models';
import { BatchService } from '../../course/batch/batch.service';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {

  studentId: number;
  student: object;
  batchId:number;
  batches:IBAtch[];
  constructor(private router:Router,private route: ActivatedRoute, private studentService: StudentService,private batchService:BatchService) {
    this.batchId=-1;
    this.batches=[];
   }

  ngOnInit() {
    this.studentId = +this.route.snapshot.paramMap.get('id')
    console.log(this.studentId)
    if (this.studentId < 0 || (this.studentId === void (0) || isNaN(this.studentId))) {
      alert("Student id not valid");
      this.router.navigate(['student'])
      return;
    }
    this.studentService.getStudentById(this.studentId).subscribe((data) => {
      console.log(data.student)
      if (data.student) {
        this.student = data.student;
      }
      else {
        alert('No student found for this id')
        this.router.navigate(['student'])
        return;
      }
      this.batchService.getAllBatches().subscribe((data: any) => {
        console.log(data.batches)
        this.batches = data.batches;
        if (this.batches.length == 0) {
          alert('No batch in this course yet')
        }
        let batch={id:this.batchId,name:'Please select one'}
        this.batches.unshift(batch);
      }, error =>{
        
        alert(error);
        this.router.navigate(['/student'])
      })

    }, error => {
      alert(error)
    })
  }


  enrollStudent(){
    this.batchService.enrollStudentToBatch(this.studentId,this.batchId).subscribe((data)=>{
            if(data.status){
              alert("student enrolled successfully")
              this.router.navigate(['/student'])
            }
            else{
              alert('Error enrolling student')
            }
    },error=>alert(error))
  }


}
