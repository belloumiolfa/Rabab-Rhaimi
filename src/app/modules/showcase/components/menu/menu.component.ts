import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { AppComponent } from '../../../../app.component';
import { Portfolio1Component } from '../../../portfolio/components/portfolio1/portfolio1.component';
import { Portfolio2Component } from '../../../portfolio/components/portfolio2/portfolio2.component';
import { Portfolio3Component } from '../../../portfolio/pages/portfolio3/portfolio3.component';
import { Project3Component } from '../../../projects/pages/project-3/project-3.component';
import { Project2Component } from '../../../projects/pages/project-2/project-2.component';
import { Project1Component } from '../../../projects/pages/project-1/project-1.component';
import { Project4Component } from '../../../projects/pages/project-4/project-4.component';
import { Project5Component } from '../../../projects/pages/project-5/project-5.component';
import { Project6Component } from '../../../projects/pages/project-6/project-6.component';
import { TeamsComponent } from '../../../teams/pages/teams/teams.component';
import { ContactComponent } from '../../../contact/pages/contact/contact.component';
import { PublicationComponent } from '../../../blog/pages/publication/publication.component';
import { BlogComponent } from '../../../blog/pages/blog/blog.component';
import { Service1Component } from '../../../services/pages/service1/service1.component';
import { Service2Component } from '../../../services/pages/service2/service2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [ CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  isMenuOpen: boolean = false;
 toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
