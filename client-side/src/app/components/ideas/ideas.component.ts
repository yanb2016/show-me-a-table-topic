import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideas: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIdeas()
    .then((res) => {
      this.ideas = res;
    })
  }

  
}
