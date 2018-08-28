import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../models/topic.model';
//import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  problem: Topic;
  constructor(private dataService: DataService, 
              private route: ActivatedRoute,  
  //            private location: Location,
              ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.problem = this.dataService.getProblem(+params['id'])
    // })
    this.route.params.subscribe(params => {
      this.dataService.getProblem(+params['id'])
      .then(problem => this.problem = problem);
    })
  }
}