import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  @Input() topic: any;
  constructor(private dataService: DataService) { }
  isLiked: boolean = false;
  ngOnInit() {
  }
  handleLikes(e, action) {
    this.isLiked = !this.isLiked;
    this.dataService.handlLikes(e, action);
  }
}
