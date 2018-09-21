import { Component, OnInit, HostListener } from '@angular/core';
import  { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../../models/topic.model';
import { Location } from '@angular/common';
import * as _ from 'lodash';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @HostListener('document:scroll', ['$event']) 
  scroll() {
    this.handleScroll();
  }
  topics: Topic[];
  msg: any;
  pageNumber: number = 0;
  category: string = '';
  constructor(private dataService: DataService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.getTopics(this.category, this.pageNumber);
    });
    this.scroll = _.debounce(this.scroll, 1000);
  }
  getTopics(category, pageNumber){
    this.dataService.getSearchedTopics(category, pageNumber)
       .then(
         topics => {
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
  goBack() {
    this.location.back();
  }
  handleScroll() {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50 )) {
      this.loadMoreTopics();
    }
  }
  loadMoreTopics() {
    this.getTopics(this.category, this.pageNumber);
  }

}
