import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpQuestionEditorComponent } from './qp-question-editor.component';

describe('QpQuestionEditorComponent', () => {
  let component: QpQuestionEditorComponent;
  let fixture: ComponentFixture<QpQuestionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpQuestionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QpQuestionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
