import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPub2Component } from './banner-pub2.component';

describe('BannerPub2Component', () => {
  let component: BannerPub2Component;
  let fixture: ComponentFixture<BannerPub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPub2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
