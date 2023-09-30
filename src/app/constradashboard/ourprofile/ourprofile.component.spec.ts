import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprofileComponent } from './ourprofile.component';

describe('OurprofileComponent', () => {
  let component: OurprofileComponent;
  let fixture: ComponentFixture<OurprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurprofileComponent]
    });
    fixture = TestBed.createComponent(OurprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
