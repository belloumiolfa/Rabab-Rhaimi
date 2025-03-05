import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContactComponent } from './banner-contact.component';

describe('BannerContactComponent', () => {
  let component: BannerContactComponent;
  let fixture: ComponentFixture<BannerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
