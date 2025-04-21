import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-prendre-rdv-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container *ngIf="isBrowser">
               <ng-container *ngComponentOutlet="rdvComponent"></ng-container>
             </ng-container>`
})
export class PrendreRdvWrapperComponent {
  isBrowser = false;
  rdvComponent: any;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      // 💡 Import dynamique FullCalendar uniquement dans le navigateur
      import('../prendre-rdv/prendre-rdv.component').then(m => {
        this.rdvComponent = m.PrendreRdvComponent;
      });
    }
  }
}
