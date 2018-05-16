import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LectureService } from './lecture.service';
import { ILecture } from '../../../../models/models';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  courseId:number;
  batchId:number;
  lectures:ILecture[];
  errorMessage:string;

  constructor(private route:ActivatedRoute,private lectureService:LectureService,private router:Router) { }

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
        this.lectureService.getLectures(this.courseId,this.batchId).subscribe((data: any) => {
          this.lectures = data.lecture;
          if (this.lectures.length == 0) {
            alert('No lectures in this course yet')
<<<<<<< HEAD
            
=======
            this.router.navigate(['/course'])
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
          }
        }, error =>{
          this.errorMessage = <any>error
          alert(this.errorMessage);
          this.router.navigate(['/course'])
        })
    })
  }

  openAddLecturePage(){
      this.router.navigate(['/addlecture'],{queryParams:{courseId:this.courseId,batchId:this.batchId}})
  }

}
