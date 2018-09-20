import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Topic } from '../../models/topic.model';
import { DataService } from '../../services/data.service';
import { InputService } from '../../services/input.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit, OnDestroy {
  topics: Topic[];
  subscriptionTopic: Subscription;
  private pageNumber: number = -1;
  searchTerm: string = '';
  subscriptionInput: Subscription;

  constructor(private dataService: DataService,
              private inputService: InputService) { }

  ngOnInit() {
    this.loadMoreTopics();
    this.getSearchTerm();
  }

  ngOnDestroy() {
    this.subscriptionTopic.unsubscribe();
  }

  getTopics(pageNumber){
    this.subscriptionTopic = this.dataService.getTopics(pageNumber)
      .subscribe(topics => {
        console.log(topics)
        if(this.pageNumber === 0) {
          this.topics = topics;
        } else {
          this.topics = _.union(this.topics.concat(topics));
        }
      }, error => {
        console.log(error)
      });
  }

  getSearchTerm(): void {
    this.subscriptionInput = this.inputService.getInput()
                                .subscribe(
                                  inputTerm => this.searchTerm = inputTerm
                                );
  }
  loadMoreTopics() {
    this.pageNumber += 1;
    this.getTopics(this.pageNumber);
  }
}