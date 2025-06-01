import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPub4Component } from './banner-pub4.component';

describe('BannerPub4Component', () => {
  let component: BannerPub4Component;
  let fixture: ComponentFixture<BannerPub4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPub4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPub4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
