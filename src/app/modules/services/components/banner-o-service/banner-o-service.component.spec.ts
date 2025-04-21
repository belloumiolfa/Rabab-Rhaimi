import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOServiceComponent } from './banner-o-service.component';

describe('BannerOServiceComponent', () => {
  let component: BannerOServiceComponent;
  let fixture: ComponentFixture<BannerOServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerOServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerOServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
