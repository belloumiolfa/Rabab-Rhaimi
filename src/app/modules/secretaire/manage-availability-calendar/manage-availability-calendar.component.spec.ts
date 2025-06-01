import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAvailabilityCalendarComponent } from './manage-availability-calendar.component';

describe('ManageAvailabilityCalendarComponent', () => {
  let component: ManageAvailabilityCalendarComponent;
  let fixture: ComponentFixture<ManageAvailabilityCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAvailabilityCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAvailabilityCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
