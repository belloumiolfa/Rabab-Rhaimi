import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub4Component } from './pub4.component';

describe('Pub4Component', () => {
  let component: Pub4Component;
  let fixture: ComponentFixture<Pub4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pub4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pub4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
