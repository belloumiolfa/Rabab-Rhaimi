import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerp2Component } from './bannerp2.component';

describe('Bannerp2Component', () => {
  let component: Bannerp2Component;
  let fixture: ComponentFixture<Bannerp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
