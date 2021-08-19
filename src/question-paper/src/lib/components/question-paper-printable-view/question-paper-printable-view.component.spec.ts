import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperViewComponent } from './question-paper-view.component';

describe('QuestionPaperViewComponent', () => {
  let component: QuestionPaperViewComponent;
  let fixture: ComponentFixture<QuestionPaperViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaperViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPaperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
