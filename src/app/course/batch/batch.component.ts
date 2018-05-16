import { Component, OnInit, Input } from '@angular/core';
import { IBAtch } from '../../../models/models';
import { BatchService } from './batch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batches: IBAtch[];
  @Input() courseId: number;
  errorMessage: string;

  constructor(private batchService: BatchService, private _route: ActivatedRoute, private router: Router) {
    this.batches = [];
    this.errorMessage = '';
  }

  ngOnInit() {
    this.courseId = +this._route.snapshot.paramMap.get('id');
    this.batchService.getBatches(this.courseId).subscribe((data: any) => {
      console.log(data.courses.batches)
      this.batches = data.courses.batches;
      if (this.batches.length == 0) {
        alert('No batch in this course yet')
      }
    }, error =>{
      this.errorMessage = <any>error
      alert(this.errorMessage);
      this.router.navigate(['/course'])
    })
    
  }

  openAddBatchPage() {
    this.router.navigate(['addBatch',this.courseId ]);
  }
  
  getLectures(id:number){
    this.router.navigate(['/lectures'],{queryParams:{courseId:this.courseId,batchId:id}})
  }

  getStudents(id:number){
    this.router.navigate(['/batches/students'],{queryParams:{courseId:this.courseId,batchId:id}})
  }
}
