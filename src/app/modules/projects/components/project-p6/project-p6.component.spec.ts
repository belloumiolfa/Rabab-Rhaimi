import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectP6Component } from './project-p6.component';

describe('ProjectP6Component', () => {
  let component: ProjectP6Component;
  let fixture: ComponentFixture<ProjectP6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectP6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectP6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
