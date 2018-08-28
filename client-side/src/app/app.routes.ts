import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TopicListComponent },
  { path: 'topics', component:TopicListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'problems/:id', component: TopicDetailComponent },
  { path: 'newproblem', component: NewTopicComponent },
  { path: '**', redirectTo: 'problems' }
];

export const routing = RouterModule.forRoot(routes);

