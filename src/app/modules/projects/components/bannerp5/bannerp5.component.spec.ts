import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerp5Component } from './bannerp5.component';

describe('Bannerp5Component', () => {
  let component: Bannerp5Component;
  let fixture: ComponentFixture<Bannerp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerp5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
