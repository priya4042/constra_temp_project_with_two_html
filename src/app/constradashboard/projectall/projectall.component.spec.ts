import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectallComponent } from './projectall.component';

describe('ProjectallComponent', () => {
  let component: ProjectallComponent;
  let fixture: ComponentFixture<ProjectallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectallComponent]
    });
    fixture = TestBed.createComponent(ProjectallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
