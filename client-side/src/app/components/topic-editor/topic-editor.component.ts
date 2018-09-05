import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model'
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
const DEFAULT_TOPIC = {
  id: 0,
  name: '',
  desc: '',
  likes:0,
  author:'',
  category:''
}
@Component({
  selector: 'app-topic-editor',
  templateUrl: './topic-editor.component.html',
  styleUrls: ['./topic-editor.component.css']
})
export class TopicEditorComponent implements OnInit {
  topic: Topic;
  newTopic: Topic = Object.assign({},DEFAULT_TOPIC);
  categories: string[] = ['life', 'tv', 'globalization', 'study']

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getTopic(+params['id'])
      .then(topic =>
        this.newTopic = topic
      );
    })
  }

  updatetopic() {
    this.dataService.updateTopic(this.newTopic);
  }
  resetForm() {
    this.newTopic = Object.assign({},DEFAULT_TOPIC)
  }
}
