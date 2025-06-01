import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDentisteComponent } from './dashboard-dentiste.component';

describe('DashboardDentisteComponent', () => {
  let component: DashboardDentisteComponent;
  let fixture: ComponentFixture<DashboardDentisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDentisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDentisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
