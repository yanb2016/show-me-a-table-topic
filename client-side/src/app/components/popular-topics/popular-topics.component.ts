import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service'
@Component({
  selector: 'app-popular-topics',
  templateUrl: './popular-topics.component.html',
  styleUrls: ['./popular-topics.component.css']
})
export class PopularTopicsComponent implements OnInit {

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topicsService.getTopics();
  }

}
