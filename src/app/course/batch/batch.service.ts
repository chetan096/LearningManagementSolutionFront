import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IBAtch } from '../../../models/models';

@Injectable()
export class BatchService {

  BASE_URL='https://frozen-dusk-16665.herokuapp.com/courses'
  constructor(private httpClient:HttpClient) { }

  getBatches(courseId:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+courseId+'/batches')
     .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addBatch(batchName:string,courseId:number):Observable<any>{
    console.log(batchName)
    return this.httpClient.post(this.BASE_URL+'/'+courseId+'/batches',{batchName:batchName})
    .do(data=>console.log("All "+JSON.stringify(data)))
    .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.error.error);
    return Observable.throw(err.error.error);
  }

  getStudents(batchId:number,courseId:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/students')
    .do(data => console.log('All ' + JSON.stringify(data)))
     .catch(this.handleError);
  }

  getAllBatches():Observable<any>{
    return this.httpClient.get('https://frozen-dusk-16665.herokuapp.com/batches')
    .do(data => console.log('All ' + JSON.stringify(data)))
     .catch(this.handleError);
  }
  
  enrollStudentToBatch(studentId:number,batchId:number):Observable<any>{
    return this.httpClient.post('https://frozen-dusk-16665.herokuapp.com/students/'+studentId+'/batches',{batchId:batchId})
    .do(data => console.log('All ' + JSON.stringify(data)))
     .catch(this.handleError);
  }
}

