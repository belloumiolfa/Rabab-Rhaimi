import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAvailabilityCalendarWrapperComponent } from './manage-availability-calendar-wrapper.component';

describe('ManageAvailabilityCalendarWrapperComponent', () => {
  let component: ManageAvailabilityCalendarWrapperComponent;
  let fixture: ComponentFixture<ManageAvailabilityCalendarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAvailabilityCalendarWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAvailabilityCalendarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
