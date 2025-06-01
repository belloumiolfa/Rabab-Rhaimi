import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub3Component } from './pub3.component';

describe('Pub3Component', () => {
  let component: Pub3Component;
  let fixture: ComponentFixture<Pub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pub3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
