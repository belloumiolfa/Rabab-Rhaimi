import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectP5Component } from './project-p5.component';

describe('ProjectP5Component', () => {
  let component: ProjectP5Component;
  let fixture: ComponentFixture<ProjectP5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectP5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectP5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
