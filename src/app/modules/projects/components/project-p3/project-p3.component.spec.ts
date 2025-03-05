import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectP3Component } from './project-p3.component';

describe('ProjectP3Component', () => {
  let component: ProjectP3Component;
  let fixture: ComponentFixture<ProjectP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectP3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
