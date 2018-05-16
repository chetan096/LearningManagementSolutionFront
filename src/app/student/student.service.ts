import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentService {
  BASE_URL = 'https://frozen-dusk-16665.herokuapp.com/students'
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any> {
    return this.httpClient.get(this.BASE_URL)
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addStudent(studentName: string): Observable<any> {

    return this.httpClient.post(this.BASE_URL, { studentName: studentName })
      .do(data => console.log("All " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getStudentById(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL+'/'+id)
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.error);
    return Observable.throw(err.error.error);
  }
}
