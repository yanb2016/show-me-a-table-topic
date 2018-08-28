import { Pipe, PipeTransform } from '@angular/core';
import { Topic } from '../models/topic.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(topics: Topic[], term: string): Topic[] {
    return topics.filter(
      topic => topic.name.toLowerCase().includes(term));
  }
}