import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {RouterModule} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseService } from './course/course.service';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { BatchComponent } from './course/batch/batch.component';
import { BatchService } from './course/batch/batch.service';
import { AddBatchComponent } from './course/batch/add-batch/add-batch.component';
import { LectureComponent } from './course/batch/lecture/lecture.component';
import { LectureService } from './course/batch/lecture/lecture.service';
import { AddlectureComponent } from './course/batch/lecture/addlecture/addlecture.component';
import { TeacherService } from './teacher/teacher.service';
import { SubjectService } from './subject/subject.service';
import { StudentDetailsComponent } from './course/batch/student-details/student-details.component';
import { StudentService } from './student/student.service';
import {  AddStudentComponent } from './student/addstudent/addstudent.component';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { EnrollStudentComponent } from './student/enroll-student/enroll-student.component';
import { ErrorPageComponent } from './error-page/error-page-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    SubjectComponent,
    TeacherComponent,
    AddCourseComponent,
    BatchComponent,
    AddBatchComponent,
    LectureComponent,
    AddlectureComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    AddSubjectComponent,
    AddTeacherComponent,
    EnrollStudentComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'course',component:CourseComponent},
      {path:'course/:id',component:BatchComponent},
      {path:'teacher',component:TeacherComponent},
      {path:'subject',component:SubjectComponent},
      {path:'student',component:StudentComponent},
      {path:'addCourse',component:AddCourseComponent},
      {path:'addBatch',component:AddBatchComponent},
      {path:'addBatch/:id',component:AddBatchComponent},
      {path:'lectures',component:LectureComponent},
      {path:'addlecture',component:AddlectureComponent},
      {path:'addStudent',component:AddStudentComponent},
      {path:'addSubject',component:AddSubjectComponent},
      {path:'addTeacher',component:AddTeacherComponent},
      {path:'searchStudent/:id',component:EnrollStudentComponent},
      {path:'batches/students',component:StudentDetailsComponent},
      {path:'',redirectTo:'course',pathMatch:'full'},
      {path:'**',component:ErrorPageComponent}
    ])
  ],
  providers: [CourseService,BatchService,LectureService,TeacherService,SubjectService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
