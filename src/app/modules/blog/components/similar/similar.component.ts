import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import du Router

@Component({
  selector: 'app-similar',
  imports: [],
  templateUrl: './similar.component.html',
  styleUrl: './similar.component.css'
})
export class SimilarComponent {
  constructor(private router: Router) {}

  redirectToPublication1() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/blanchiment']);
    });
  }
  redirectToPublication2() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/implant-dentaire']);
    });
  }
}
