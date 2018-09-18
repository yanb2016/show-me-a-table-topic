import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model'
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

const DEFAULT_TOPIC = {
  id: 0,
  name: '',
  desc: '',
  likes:0,
  author:'',
  category:''
}
@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {
  message: any;
  errMsg: any;
  newTopic: Topic = Object.assign({},DEFAULT_TOPIC);
  categories: string[] = ['sport', 'life', 'study', 'pets', 'travel', 'music']
  constructor(private dataService: DataService,
              private auth: AuthService) { }
  ngOnInit() {
    this.newTopic.author = this.auth.getEmail();
  }

  addTopic() {
    this.dataService.addTopic(this.newTopic)
    .then(res=> {
      this.message = res;
    })
    .catch(error=> {
      this.errMsg = error.error;
    })

  }
  resetForm() {
    this.newTopic = Object.assign({},DEFAULT_TOPIC)
  }
}
