import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model'
const DEFAULT_TOPIC = {
  id: 0,
  title: '',
  desc: '',
  tag: 'life',
  likes: 0
}
@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {
  newTopic: Topic = Object.assign({}, DEFAULT_TOPIC);
  tags: string[] = ['life', 'military', 'tv']
  constructor() { }

  ngOnInit() {
  }

}
