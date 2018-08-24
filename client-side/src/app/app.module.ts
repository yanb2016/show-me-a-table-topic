import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PopularTopicsComponent } from './components/popular-topics/popular-topics.component';
import { AllTopicsComponent } from './components/all-topics/all-topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PopularTopicsComponent,
    AllTopicsComponent,
    TopicDetailComponent,
    NewTopicComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
