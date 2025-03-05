import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerp1Component } from './bannerp1.component';

describe('Bannerp1Component', () => {
  let component: Bannerp1Component;
  let fixture: ComponentFixture<Bannerp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
