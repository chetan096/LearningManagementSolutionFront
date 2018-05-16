import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IBAtch } from '../../../models/models';


@Injectable()
export class BatchService {

<<<<<<< HEAD
  BASE_URL='https://frozen-dusk-16665.herokuapp.com/courses'
=======
  BASE_URL='http://localhost:8000/courses'
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
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
<<<<<<< HEAD
    return this.httpClient.get('https://frozen-dusk-16665.herokuapp.com/batches')
=======
    return this.httpClient.get('http://localhost:8000/batches')
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
    .do(data => console.log('All ' + JSON.stringify(data)))
     .catch(this.handleError);
  }
  
  enrollStudentToBatch(studentId:number,batchId:number):Observable<any>{
<<<<<<< HEAD
    return this.httpClient.post('https://frozen-dusk-16665.herokuapp.com/students/'+studentId+'/batches',{batchId:batchId})
=======
    return this.httpClient.post('http://localhost:8000/students/'+studentId+'/batches',{batchId:batchId})
>>>>>>> 4bee09653cc243c2e7fdf946034d3fb31a29713c
    .do(data => console.log('All ' + JSON.stringify(data)))
     .catch(this.handleError);
  }
}

