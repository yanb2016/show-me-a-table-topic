import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularTopicComponent } from './most-popular-topic.component';

describe('MostPopularTopicComponent', () => {
  let component: MostPopularTopicComponent;
  let fixture: ComponentFixture<MostPopularTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
