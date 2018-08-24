import { RouterModule, Routes } from '@angular/router';
import { PopularTopicsComponent } from './components/popular-topics/popular-topics.component';
import { AllTopicsComponent } from './components/all-topics/all-topics.component';
import {NewTopicComponent} from './components/new-topic/new-topic.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AllTopicsComponent},
  { path: 'topics', component: AllTopicsComponent},
  { path: 'newTopic', component: NewTopicComponent},
];


export const routing = RouterModule.forRoot(routes);