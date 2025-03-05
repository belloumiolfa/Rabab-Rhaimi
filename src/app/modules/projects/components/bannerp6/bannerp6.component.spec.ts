import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerp6Component } from './bannerp6.component';

describe('Bannerp6Component', () => {
  let component: Bannerp6Component;
  let fixture: ComponentFixture<Bannerp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerp6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
