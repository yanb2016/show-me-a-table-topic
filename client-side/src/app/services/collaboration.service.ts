import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
declare var io: any;

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  private _userScource = new Subject<string>();

  collaborationSocket: any;
  constructor() { }
  init(editor: any, sessionId: string): Observable<string> {
  	// this.collaborationSocket.on("message", (people) => {
  	// 	console.log('people: ' + people);
    // })
    this.collaborationSocket = io(window.location.origin, 
      {query: 'sessionId=' + sessionId});
    this.collaborationSocket.on('userChange', (data:string[]) => {
      this._userScource.next(data.toString());
    })
    return this._userScource.asObservable();
  }
}