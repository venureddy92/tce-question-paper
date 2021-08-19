import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplatesComponent } from './question-templates.component';

describe('QuestionTemplatesComponent', () => {
  let component: QuestionTemplatesComponent;
  let fixture: ComponentFixture<QuestionTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
