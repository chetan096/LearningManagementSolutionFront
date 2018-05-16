import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeacherService {
<<<<<<< HEAD
  BASE_URL='https://frozen-dusk-16665.herokuapp.com/teachers'
=======
  BASE_URL='http://localhost:8000/teachers'
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
  constructor(private httpClient:HttpClient) { }

  getTeachers():Observable<any>{
    return this.httpClient.get(this.BASE_URL)
     .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addTeacher(teacherName: string,subjectId:number): Observable<any> {

    return this.httpClient.post(this.BASE_URL, { teacherName:teacherName,subjectId:subjectId})
      .do(data => console.log("All " + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.error);
    return Observable.throw(err.error.error);
  }
}
