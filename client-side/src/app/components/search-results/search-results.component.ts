import { Component, OnInit } from '@angular/core';
import  { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../../models/topic.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  topics: Topic[];
  constructor(private dataService: DataService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getSearchedTopics(params['category'])
      .then(topics => this.topics = topics)
    })
  }
  goBack() {
    this.location.back();
  }
}
