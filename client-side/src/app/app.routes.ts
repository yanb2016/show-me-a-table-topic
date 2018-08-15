import { RouterModule, Routes } from '@angular/router';
import { PopularTapicsComponent } from './components/popular-tapics/popular-tapics.component';
import { AllTopicsComponent } from './components/all-topics/all-topics.component';
import {NewTopicComponent} from './components/new-topic/new-topic.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PopularTapicsComponent},
  { path: 'topics', component: AllTopicsComponent},
  { path: 'newTopic', component: NewTopicComponent},
];


export const routing = RouterModule.forRoot(routes);