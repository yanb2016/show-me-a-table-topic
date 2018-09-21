import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
export class TopicListComponent implements OnInit {
  topics: Topic[];
  subscriptionTopic: Subscription;
  private pageNumber: number = 0;
  searchTerm: string = '';
  subscriptionInput: Subscription;
  msg: string = '';

  constructor(private dataService: DataService,
              private inputService: InputService) { }
  @HostListener('document:scroll', ['$event']) 
  scroll() {
    this.handleScroll();
  }
  ngOnInit() {
    this.loadMoreTopics();
    this.getSearchTerm();
    this.scroll = _.debounce(this.scroll, 1000);
  }
  handleScroll() {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50 )) {
      this.loadMoreTopics();
    }
  }
  getTopics(){
   this.dataService.getTopics(this.pageNumber)
      .then(
        topics => {
          if(topics.length < 10) {
            this.msg = 'No More Topics';
          }
        if(this.pageNumber === 0) {
          this.topics = topics;
        } else {
          this.topics = _.union(this.topics.concat(topics));
        }
        this.pageNumber += 1;
      })
      .catch(err =>{
        this.msg = 'No More Topics';
      })
  }
  getSearchTerm(): void {
    this.subscriptionInput = this.inputService.getInput()
      .subscribe(
        inputTerm => this.searchTerm = inputTerm
      );
  }
  loadMoreTopics() {
    this.getTopics();
  }
}