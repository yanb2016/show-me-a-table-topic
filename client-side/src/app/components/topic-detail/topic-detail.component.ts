import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  author: string;
  topic: Topic;
  constructor(private dataService: DataService, 
              private route: ActivatedRoute,  
              private location: Location,
              private auth: AuthService,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getTopic(+params['id'])
      .then(topic => this.topic = topic)
    })
    this.author = this.auth.getEmail();
  }
  goBack() {
    this.location.back();
  }
}