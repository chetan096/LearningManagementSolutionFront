import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LectureService {

<<<<<<< HEAD
  BASE_URL='https://frozen-dusk-16665.herokuapp.com/courses'
=======
  BASE_URL='http://localhost:8000/courses'
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
  constructor(private httpClient:HttpClient) { }

  getLectures(courseId:number,batchId:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/lectures')
     .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.error);
    return Observable.throw(err.error.error);
  }

  addLecture(lectureName:string,courseId:number,teacherId:number,batchId:number,subjectId:number):Observable<any>{
    return this.httpClient.post(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/lectures',{lectureName:lectureName,teacherId:teacherId,subjectId:subjectId})
    .do(data=>console.log("All "+JSON.stringify(data)))
    .catch(this.handleError);
  }

}
