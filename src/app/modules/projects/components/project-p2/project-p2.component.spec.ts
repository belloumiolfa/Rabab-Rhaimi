import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectP2Component } from './project-p2.component';

describe('ProjectP2Component', () => {
  let component: ProjectP2Component;
  let fixture: ComponentFixture<ProjectP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
