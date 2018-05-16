import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse } from '../../models/models';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CourseService {

<<<<<<< HEAD
  BASE_URL = 'https://frozen-dusk-16665.herokuapp.com/courses';
=======
  BASE_URL = 'http://localhost:8000/courses';
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<any> {
    return this.httpClient.get<ICourse[]>(this.BASE_URL)
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addCourse(courseName:string):Observable<any>{

    return this.httpClient.post(this.BASE_URL,{courseName:courseName})
    .do(data=>console.log("All "+JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.error.error);
    return Observable.throw(err.error.error);
  }




}
