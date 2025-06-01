import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Similar2Component } from './similar2.component';

describe('Similar2Component', () => {
  let component: Similar2Component;
  let fixture: ComponentFixture<Similar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Similar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Similar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
