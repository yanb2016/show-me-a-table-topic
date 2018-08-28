import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemEditorComponent } from './problem-editor.component';

describe('ProblemEditorComponent', () => {
  let component: ProblemEditorComponent;
  let fixture: ComponentFixture<ProblemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
