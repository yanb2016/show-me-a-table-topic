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
  submitted: boolean = false;
  displayInfo: any;
  newTopic: Topic = Object.assign({},DEFAULT_TOPIC);
  constructor(private dataService: DataService,
              private auth: AuthService) { }
  ngOnInit() {
    this.newTopic.author = this.auth.getEmail();
  }
  addTopic() {
    this.submitted = true;
    console.log(this.submitted)
    this.newTopic.category = this.newTopic.category.toLowerCase();
    this.dataService.addTopic(this.newTopic)
    .then(res=> {
      this.displayInfo = res;
    })
    .catch(error=> {
      this.displayInfo = error;
    })
  }
}
