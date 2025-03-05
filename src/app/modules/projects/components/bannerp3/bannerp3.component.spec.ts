import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerp3Component } from './bannerp3.component';

describe('Bannerp3Component', () => {
  let component: Bannerp3Component;
  let fixture: ComponentFixture<Bannerp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerp3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
