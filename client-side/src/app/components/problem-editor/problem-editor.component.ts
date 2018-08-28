import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model'
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
const DEFAULT_PROBLEM = {
  id: 0,
  name: '',
  desc: '',
  likes:0,
  author:''
}
@Component({
  selector: 'app-problem-editor',
  templateUrl: './problem-editor.component.html',
  styleUrls: ['./problem-editor.component.css']
})
export class TopicEditorComponent implements OnInit {
  problem: Topic;
  newProblem: Topic = Object.assign({},DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super']

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }
  // problems = this.dataService.getProblems();
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getProblem(+params['id'])
      .then(problem => this.problem = problem);
    })
  }

  updateProblem() {
    this.dataService.updateProblem(this.newProblem);
  }
  resetForm() {
    this.newProblem = Object.assign({},DEFAULT_PROBLEM)
  }
}
