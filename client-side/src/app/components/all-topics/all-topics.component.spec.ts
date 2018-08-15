import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopicsComponent } from './all-topics.component';

describe('AllTopicsComponent', () => {
  let component: AllTopicsComponent;
  let fixture: ComponentFixture<AllTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
