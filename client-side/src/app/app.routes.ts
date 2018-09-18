import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TopicEditorComponent } from './components/topic-editor/topic-editor.component'
import { MostPopularTopicComponent } from './components//most-popular-topic/most-popular-topic.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { IdeasComponent } from './ideas/ideas.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MostPopularTopicComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'topics', component:TopicListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'topics/:category', component: SearchResultsComponent },
  { path: 'topic/:id', component: TopicDetailComponent },
  { path: 'topic_ditor/:id', component: TopicEditorComponent },
  { path: 'new_topic', component: NewTopicComponent },
  { path: '**', redirectTo: 'problems' }
];

export const routing = RouterModule.forRoot(routes);

