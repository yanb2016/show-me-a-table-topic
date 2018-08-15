import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service';
import { Topic } from '../../models/topic.model';
@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.css']
})
export class AllTopicsComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService: TopicsService) { }

  ngOnInit() {
   this.topics =  this.topicService.getTopics();
  }
}
