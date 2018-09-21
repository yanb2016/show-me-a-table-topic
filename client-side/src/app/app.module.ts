import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { routing } from './app.routes';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MostPopularTopicComponent } from './components/most-popular-topic/most-popular-topic.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    NewTopicComponent,
    NavBarComponent,
    SearchPipe,
    SignupComponent,
    LoginComponent,
    MostPopularTopicComponent,
    SearchResultsComponent,
    IdeasComponent,
    FooterComponent,
    TopicDetailComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
