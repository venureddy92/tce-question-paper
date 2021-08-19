import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlyoutComponent } from './flyout.component';

describe('FlyoutComponent', () => {
  let component: FlyoutComponent;
  let fixture: ComponentFixture<FlyoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FlyoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
