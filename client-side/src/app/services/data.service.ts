import { Injectable } from '@angular/core';
import { Topic } from '../models/topic.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _topicSource = new BehaviorSubject<Topic[]>([]);
  constructor(private httpClient: HttpClient,
              private auth: AuthService) { }

  getTopics(pageNumber:number): Observable<Topic[]> {
    this.httpClient.get(`api/v1/topics/pagenumber/${pageNumber}`)
      .toPromise()
      .then((res: any) => {
        this._topicSource.next(res);
      })
      .catch(e => {
        this.handleError(e)
      });
      return this._topicSource.asObservable();
  }
  getPopularTopics(): Observable<Topic[]> {
    this.httpClient.get('api/v1/popularTopics')
      .toPromise()
      .then((res: any) => {
        this._topicSource.next(res);
      })
      .catch(this.handleError);
      return this._topicSource.asObservable();
  }
  getSearchedTopics(category: string):  Promise<Topic[]> {
     return this.httpClient.get(`api/v1/topics/${category}`)
      .toPromise()
      .then((res: any) => res)    
      .catch(this.handleError);
  }
  getTopic(id: number): Promise<Topic> {
    return this.httpClient.get(`api/v1/topic/${id}`)
      .toPromise()
      .then((res: any) => res)    
      .catch(this.handleError);
  }
  getIdeas(): Promise<any> {
    return this.httpClient.get('api/v1/ideas')
    .toPromise()
    .then((res: any) => res);
  }

  addTopic(topic: Topic) {
    const options = {
      headers: new HttpHeaders({
        'constent-type': 'application/json',
        // 'Authorization': 'bearer ' + this.auth.getToken()
      })
    };
    return this.httpClient.post('editor/topics', topic, options)
    .toPromise()
    .then((res: any) => {
      return res;
    })
    .catch(this.handleError);
  }
  updateTopic(id: number) {
    const options = {
      headers: new HttpHeaders({
        'constent-type': 'application/json',
        // 'Authorization': 'bearer ' + this.auth.getToken()
      })
    };
    return this.httpClient.put(`editor/topics/${id}`, options)
    .toPromise()
    .then((res: any) => {
      return res;
    })
    .catch(this.handleError);
  }
  private handleError(err: any): Promise<any> {
    return Promise.reject(err.error || err);
  }
}