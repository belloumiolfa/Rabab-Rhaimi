import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publication2Component } from './publication2.component';

describe('Publication2Component', () => {
  let component: Publication2Component;
  let fixture: ComponentFixture<Publication2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publication2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
