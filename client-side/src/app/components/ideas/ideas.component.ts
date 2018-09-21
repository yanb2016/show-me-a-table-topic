import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideas: any;
  private pageNumber: number = 0;
  msg: string = '';

  constructor(private dataService: DataService) { }
  @HostListener('document:scroll', ['$event']) 
  scroll() {
    this.handleScroll();
  }
  ngOnInit() {
    this.loadMoreIdeas();
    this.scroll = _.debounce(this.scroll, 1000);
  }
  handleScroll() {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50 )) {
      this.loadMoreIdeas();
    }
  }
  getIdeas(){
   this.dataService.getIdeas(this.pageNumber)
      .then(
        ideas => {
          if(ideas.length < 10) {
            this.msg = 'No More Ideas';
          }
        if(this.pageNumber === 0) {
          this.ideas = ideas;
        } else {
          this.ideas = _.union(this.ideas.concat(ideas));
        }
        this.pageNumber += 1;
      })
      .catch(err =>{
        this.msg = 'No More Ideas';
      })
  }
  loadMoreIdeas() {
    this.getIdeas();
  }
}
