import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTopicsComponent } from './popular-topics.component';

describe('PopularTapicsComponent', () => {
  let component: PopularTopicsComponent;
  let fixture: ComponentFixture<PopularTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
