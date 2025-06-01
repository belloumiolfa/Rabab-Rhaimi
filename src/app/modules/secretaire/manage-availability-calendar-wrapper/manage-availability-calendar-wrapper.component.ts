import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AvailabilityModalComponent } from '../availability-modal/availability-modal.component';

@Component({
  selector: 'app-manage-availability-calendar-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="isBrowser">
      <ng-container *ngComponentOutlet="calendarComponent"></ng-container>
    </ng-container>
  `
})
export class ManageAvailabilityCalendarWrapperComponent {
  isBrowser = false;
  calendarComponent: any;
  availabilityAModifier: any = null;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      import('../manage-availability-calendar/manage-availability-calendar.component')
        .then(m => this.calendarComponent = m.ManageAvailabilityCalendarComponent);
    }
  } 
}
