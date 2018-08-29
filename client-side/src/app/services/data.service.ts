import { Injectable } from '@angular/core';
import { Topic } from '../models/topic.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _problemSource = new BehaviorSubject<Topic[]>([]);
  constructor(private httpClient: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    this.httpClient.get('api/v1/problems')
      .toPromise()
      .then((res: any) => {
        this._problemSource.next(res);
      })
      .catch(this.handleError);
      return this._problemSource.asObservable();
  }
  getPopularTopics(): Observable<Topic[]> {
    this.httpClient.get('api/v1/popularTopics')
      .toPromise()
      .then((res: any) => {
        this._problemSource.next(res);
      })
      .catch(this.handleError);
      return this._problemSource.asObservable();
  }
  getTopic(id: number): Promise<Topic> {
    return this.httpClient.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: any) => res)    
      .catch(this.handleError);
  }
  addProblem(problem: Topic) {
    const options = {
      headers: new HttpHeaders({
        'constent-type': 'application/json'
      })
    };
    return this.httpClient.post('api/v1/problems', problem, options)
    .toPromise()
    .then((res: any) => {
      this.getTopics();
      return res;
    })
    .catch(this.handleError);
  }
  updateProblem(problem: Topic) {
    const options = {
      headers: new HttpHeaders({
        'constent-type': 'application/json'
      })
    };
    return this.httpClient.put('api/v1/problems', problem, options)
    .toPromise()
    .then((res: any) => {
      this.getTopics();
      return res;
    })
    .catch(this.handleError);
  }
  private handleError(err: any): Promise<any> {
    return Promise.reject(err.body || err);
  }
}