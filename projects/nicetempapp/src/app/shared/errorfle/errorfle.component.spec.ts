import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorfleComponent } from './errorfle.component';

describe('ErrorfleComponent', () => {
  let component: ErrorfleComponent;
  let fixture: ComponentFixture<ErrorfleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorfleComponent]
    });
    fixture = TestBed.createComponent(ErrorfleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
