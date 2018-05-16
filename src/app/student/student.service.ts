import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentService {
<<<<<<< HEAD
  BASE_URL = 'https://frozen-dusk-16665.herokuapp.com/students'
=======
  BASE_URL = 'http://localhost:8000/students'
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
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
