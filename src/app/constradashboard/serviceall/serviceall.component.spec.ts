import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceallComponent } from './serviceall.component';

describe('ServiceallComponent', () => {
  let component: ServiceallComponent;
  let fixture: ComponentFixture<ServiceallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceallComponent]
    });
    fixture = TestBed.createComponent(ServiceallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
