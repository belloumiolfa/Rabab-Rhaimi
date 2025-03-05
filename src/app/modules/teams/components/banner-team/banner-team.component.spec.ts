import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTeamComponent } from './banner-team.component';

describe('BannerTeamComponent', () => {
  let component: BannerTeamComponent;
  let fixture: ComponentFixture<BannerTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
