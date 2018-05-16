import { Component, OnInit } from '@angular/core';
import { ITeacher } from '../../models/models';
import { TeacherService } from './teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {


  teachers: ITeacher[];
  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe((data: any) => {
      this.teachers = data.teachers;
      if (this.teachers.length == 0) {
<<<<<<< HEAD
        alert('No teacher found ');
=======
        alert('No subjects found ');
        this.router.navigate([''])
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
      }

    }, error => {
      alert(error)
    })
  }
  openAddTeacherPage(){
    this.router.navigate(['addTeacher'])
  }

}
