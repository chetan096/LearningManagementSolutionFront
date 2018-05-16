import { Component, OnInit } from '@angular/core';
import { ISubject } from '../../models/models';
import { SubjectService } from './subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects:ISubject[];
  constructor(private subjectService:SubjectService,private router:Router) { }

  ngOnInit() {

    this.subjectService.getSubjects().subscribe((data:any)=>{
           this.subjects=data.subjects;
           if(this.subjects.length==0){
             alert('No subjects found ');
<<<<<<< HEAD
=======
             this.router.navigate([''])
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
           }
           
    },error=>{
      alert(error)
    })
  }

  openAddSubjectPage(){
    this.router.navigate(['/addSubject'])
  }
}
