import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // Import du Router

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [RouterLink]  // 🚨 IMPORTANT : Importer RouterModule
})
export class BlogComponent {
constructor(private router: Router) {}

redirectToPublication2() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/implant-dentaire']);
  });
}
redirectToPublication1() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/blanchiment']);
  });
}
}
