import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Topic } from '../../models/topic.model';
import { DataService } from '../../services/data.service';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit, OnDestroy {
  topics: Topic[];
  subscriptionTopic: Subscription;

  searchTerm: string = '';
  subscriptionInput: Subscription;

  constructor(private dataService: DataService,
              private inputService: InputService) { }

  ngOnInit() {
    this.getTopics();
    this.getSearchTerm();
  }

  ngOnDestroy() {
    this.subscriptionTopic.unsubscribe();
  }

  getTopics() {
    //this.problems = this.dataService.getProblems();
    this.subscriptionTopic = this.dataService.getTopics()
      .subscribe(Topics => this.topics = Topics);
  }

  getSearchTerm(): void {
    this.subscriptionInput = this.inputService.getInput()
                                .subscribe(
                                  inputTerm => this.searchTerm = inputTerm
                                );
  }
}