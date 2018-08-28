import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
declare var ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public languages: string[] = ['Java', 'Python'];
  language: string = 'Java';
  editor: any;
  sessionId: string;

  users: string;
  subscriptionUsers: Subscription;

  defaultContent= {
    "Java": `public class Example{
      public static void main(String[] args) {
        // Type your Java code 
      } 
    }`,
    'Python': `class Solution:
      def example():
      # write your python code here.
    `
  }
  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.sessionId = params['id'];
        console.log(this.sessionId);
        this.initEditor();
      })
  }
  initEditor() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    document.getElementsByTagName('textarea')[0].focus();
    this.subscriptionUsers = this.collaboration.init(this.editor, this.sessionId)
      .subscribe(users => this.users = users);
    this.editor.lastAppliedChange = null;
    // this.editor.on("change", (e) => {
    //   console.log('Editor changes: ' + JSON.stringify(e));
    // });
    console.log(this.users);
  }
  resetEditor(): void {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());  	
  }
  setLanguage(language: string): void{
    this.language = language;
    this.resetEditor();
  }
  submit(): void{
    var userCode = this.editor.getValue();
    console.log(userCode);
  }

}
