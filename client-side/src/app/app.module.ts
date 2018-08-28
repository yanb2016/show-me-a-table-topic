import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { routing } from './app.routes';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './components/editor/editor.component';
import { SearchPipe } from './pipes/search.pipe';
import { TopicEditorComponent } from './components/problem-editor/problem-editor.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicDetailComponent,
    NewTopicComponent,
    NavBarComponent,
    EditorComponent,
    SearchPipe,
    TopicEditorComponent,
    SignupComponent,
    LoginComponent,

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
