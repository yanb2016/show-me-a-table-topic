import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Topic } from '../../models/topic.model';
import { DataService } from '../../services/data.service';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-most-popular-topic',
  templateUrl: './most-popular-topic.component.html',
  styleUrls: ['./most-popular-topic.component.css']
})
export class MostPopularTopicComponent implements OnInit,OnDestroy {
  topics: Topic[];
  subscriptionTopic: Subscription;

  searchTerm: string = '';
  subscriptionInput: Subscription;

  constructor(private dataService: DataService,
              private inputService: InputService) { }

  ngOnInit() {
    this.getPopularTopics();
    this.getSearchTerm();
  }
  ngOnDestroy() {
    this.subscriptionTopic.unsubscribe();
  }

  getPopularTopics() {
    this.subscriptionTopic = this.dataService.getPopularTopics()
      .subscribe(Topics => this.topics = Topics);
  }

  getSearchTerm(): void {
    this.subscriptionInput = this.inputService.getInput()
                                .subscribe(
                                  inputTerm => this.searchTerm = inputTerm
                                );
  }
  handleLikes(e, action) {

    this.dataService.handlLikes(e, action);
  }
}