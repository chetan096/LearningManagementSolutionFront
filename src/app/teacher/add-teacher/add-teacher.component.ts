import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { SubjectService } from '../../subject/subject.service';
import { ISubject } from '../../../models/models';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  subjects: ISubject[];
  subjectId: number;
  teacherName: string;

  constructor(private teacherService: TeacherService, private router: Router, private subjectService: SubjectService) {
    this.subjects = [];
    this.subjectId = -1;
  }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe((data: any) => {
      this.subjects = data.subjects;

      if (this.subjects.length == 0) {
        alert('No subjects found ');
        this.router.navigate([''])
      }

      let subject = { id: this.subjectId, name: 'Please Select One' }
      this.subjects.unshift(subject);
    }, error => {
      alert(error)
    })
  }

  addTeacher() {
    this.teacherService.addTeacher(this.teacherName, this.subjectId).subscribe((data) => {
      if (data.status) {
        alert('teacher added successfully')
      }
      else {
        alert('Error adding teacher')
        this.router.navigate([''])
      }
      this.teacherName = '';
      this.router.navigate(['teacher'])
    }, error => {
      alert(error)
    })
  }

}
