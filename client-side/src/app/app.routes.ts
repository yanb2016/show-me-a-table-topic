import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MostPopularTopicComponent } from './components//most-popular-topic/most-popular-topic.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MostPopularTopicComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'about', component:AboutComponent },
  { path: 'topics', component:TopicListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'topics/:category', component: SearchResultsComponent },
  { path: 'new_topic', component: NewTopicComponent },
  { path: '**', redirectTo: 'problems' }
];

export const routing = RouterModule.forRoot(routes);

