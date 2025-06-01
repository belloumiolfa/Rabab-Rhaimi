import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPub3Component } from './banner-pub3.component';

describe('BannerPub3Component', () => {
  let component: BannerPub3Component;
  let fixture: ComponentFixture<BannerPub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPub3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
