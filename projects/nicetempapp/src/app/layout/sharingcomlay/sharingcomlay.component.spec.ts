import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingcomlayComponent } from './sharingcomlay.component';

describe('SharingcomlayComponent', () => {
  let component: SharingcomlayComponent;
  let fixture: ComponentFixture<SharingcomlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharingcomlayComponent]
    });
    fixture = TestBed.createComponent(SharingcomlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
