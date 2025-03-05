import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerp4Component } from './bannerp4.component';

describe('Bannerp4Component', () => {
  let component: Bannerp4Component;
  let fixture: ComponentFixture<Bannerp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerp4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bannerp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
