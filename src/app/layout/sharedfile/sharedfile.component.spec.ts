import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedfileComponent } from './sharedfile.component';

describe('SharedfileComponent', () => {
  let component: SharedfileComponent;
  let fixture: ComponentFixture<SharedfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedfileComponent]
    });
    fixture = TestBed.createComponent(SharedfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
