import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpTemplateLoaderComponent } from './qp-template-loader.component';

describe('QpTemplateLoaderComponent', () => {
  let component: QpTemplateLoaderComponent;
  let fixture: ComponentFixture<QpTemplateLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpTemplateLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QpTemplateLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
