import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectP4Component } from './project-p4.component';

describe('ProjectP4Component', () => {
  let component: ProjectP4Component;
  let fixture: ComponentFixture<ProjectP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectP4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
