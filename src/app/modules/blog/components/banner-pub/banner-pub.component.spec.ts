import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPubComponent } from './banner-pub.component';

describe('BannerPubComponent', () => {
  let component: BannerPubComponent;
  let fixture: ComponentFixture<BannerPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
