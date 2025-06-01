import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog1',
  imports: [RouterModule],
  templateUrl: './blog1.component.html',
  styleUrl: './blog1.component.css'
})
export class Blog1Component {
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
  redirectToPublication3() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/detartrage']);
    });
  }
  redirectToPublication4() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/prevention-dentaire']);
    });
  }
}
