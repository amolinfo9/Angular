import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempValidationComponent } from './temp-validation.component';

describe('TempValidationComponent', () => {
  let component: TempValidationComponent;
  let fixture: ComponentFixture<TempValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempValidationComponent]
    });
    fixture = TestBed.createComponent(TempValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
