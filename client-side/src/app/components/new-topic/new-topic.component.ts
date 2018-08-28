import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model'
import { DataService } from '../../services/data.service';

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
  newProblem: Topic = Object.assign({},DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super']

  constructor(private dataService: DataService) { }
  // problems = this.dataService.getProblems();
  ngOnInit() {
  }

  addProblem() {
    this.dataService.addProblem(this.newProblem);
  }
  resetForm() {
    this.newProblem = Object.assign({},DEFAULT_PROBLEM)
  }
}
