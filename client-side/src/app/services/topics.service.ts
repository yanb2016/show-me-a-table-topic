import { Injectable } from '@angular/core';

const topics = [
  {
    id: 1,
    title: "Test1",
    desc: "test",
    tag: "life",
    likes: 1
  },
  {
    id: 2,
    title: "Test2",
    desc: "test",
    tag: "life",
    likes: 3
  },
  {
    id: 3,
    title: "Test3",
    desc: "test",
    tag: "life",
    likes: 3
  },
  {
    id: 4,
    title: "Test4",
    desc: "test",
    tag: "life",
    likes: 5
  },
  {
    id: 5,
    title: "Test5",
    desc: "test",
    tag: "life",
    likes: 9
  },
]

@Injectable({
  providedIn: 'root'
})

export class TopicsService {

  constructor() { }
  getTopics() {
    return topics;
  }
  getPopularTopics() {
    
  }
}
