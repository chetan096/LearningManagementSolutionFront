import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  batchName:string;
  errorMessage:string;
  courseId:number;
  constructor(private batchService:BatchService,private router:Router,private route:ActivatedRoute ) { 
    this.batchName='';
    this.errorMessage='';
  }

  ngOnInit() {
    this.courseId=+this.route.snapshot.paramMap.get('id');
  }

  addBatch(){
    console.log(this.batchName)
    this.batchService.addBatch(this.batchName,this.courseId).subscribe((data:any)=>{
      if (data.status){
        alert("added successfully")
        this.batchName='';
        this.router.navigate(['course/',this.courseId])
      }
      else{
        alert("error adding new course")
      }
    },error=>this.errorMessage=error)
}

}
