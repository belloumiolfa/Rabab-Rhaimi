import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import du Router
import { RouterModule } from '@angular/router'; // Import nécessaire pour utiliser `<a routerLink>`

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [RouterModule]  // 🚨 IMPORTANT : Importer RouterModule
})
export class BlogComponent {

  
}
