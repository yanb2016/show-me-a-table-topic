import { Component, OnInit } from '@angular/core';
import { FormControl }  from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { InputService } from '../../services/input.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: string;
  searchBox: FormControl = new FormControl();
  subscription: Subscription;
  autherized: boolean;
  constructor(private input: InputService,
              private router: Router,
              private auth: AuthService) { }
  ngOnInit() {
    this.user = this.auth.getEmail();
    this.subscription = this.searchBox
    .valueChanges
    .pipe(debounceTime(200))
    .subscribe(
      term => {
        this.input.changeInput(term);
      }
    );
    // add child subscription practice
    const subscription = this.auth.isUserAuthenticated()
    .subscribe(
      (res => {
        this.autherized = res;
      })
    )
    this.subscription.add(subscription);
    // or simplely 
    //this.autherized = this.auth.isUserAuthenticated();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchTopic(): void {
    this.router.navigate(['/topics']);
  }
  logout() {
    this.autherized = !this.autherized;
    this.user = '';
    this.auth.deauthenticateUser();
  }
}
