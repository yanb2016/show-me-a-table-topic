import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model'
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

const DEFAULT_PROBLEM = {
  id: 0,
  name: '',
  desc: '',
  likes:0,
  author:''
}
@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {
  newTopic: Topic = Object.assign({},DEFAULT_PROBLEM);
  categories: string[] = ['tv', 'life', 'study', 'globalization']
  constructor(private dataService: DataService,
              private auth: AuthService) { }
  // problems = this.dataService.getProblems();
  ngOnInit() {
    this.newTopic.author = this.auth.getEmail();
  }

  addTopic() {
    this.dataService.addProblem(this.newTopic);
  }
  resetForm() {
    this.newTopic = Object.assign({},DEFAULT_PROBLEM)
  }
}
