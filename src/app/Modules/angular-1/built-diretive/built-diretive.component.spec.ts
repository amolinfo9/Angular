import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltDiretiveComponent } from './built-diretive.component';

describe('BuiltDiretiveComponent', () => {
  let component: BuiltDiretiveComponent;
  let fixture: ComponentFixture<BuiltDiretiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltDiretiveComponent]
    });
    fixture = TestBed.createComponent(BuiltDiretiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
