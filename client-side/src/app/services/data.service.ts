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

  getTopics(pageNumber:number): Promise<Topic[]> {
    return this.httpClient.get(`api/v1/topics/pagenumber/${pageNumber}`)
    .toPromise()
    .then((res: any) => res)    
    .catch(this.handleError);
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
  getSearchedTopics(category: string, pagenumber: number):  Promise<Topic[]> {
     return this.httpClient.get(`api/v1/topics/${category}/${pagenumber}`)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        return res;
      })    
      .catch(this.handleError);
  }
  getIdeas(pageNumber:number): Promise<any> {
    return this.httpClient.get(`api/v1/ideas/pagenumber/${pageNumber}`)
    .toPromise()
    .then((res: any) => res)
    .catch(this.handleError)
  }

  addTopic(topic: Topic) {
    const options = {
      headers: new HttpHeaders({
        'constent-type': 'application/json'
      })
    };
    return this.httpClient.post('editor/topics', topic, options)
    .toPromise()
    .then((res: any) => {
      return res;
    })
    .catch(this.handleError);
  }
  handlLikes(id: number, action: any) {
    const options = {
      headers: new HttpHeaders({
        'constent-type': 'application/json',
      })
    };
    return this.httpClient.put(`editor/topics/${id}/${action}`, options)
    .toPromise()
    .then((res: any) => {
      return res;
    })
    .catch(this.handleError);
  }
  private handleError(err: any): Promise<any> {
    console.log(err)
    return Promise.reject(err.error || err);
  }
}