import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './modules/blog/pages/blog/blog.component';
import { PublicationComponent } from './modules/blog/pages/publication/publication.component';
import { ContactComponent } from './modules/contact/pages/contact/contact.component';
import { Portfolio1Component } from './modules/portfolio/components/portfolio1/portfolio1.component';
import { Portfolio2Component } from './modules/portfolio/components/portfolio2/portfolio2.component';
import { Portfolio3Component } from './modules/portfolio/pages/portfolio3/portfolio3.component';
import { Project1Component } from './modules/projects/pages/project-1/project-1.component';
import { Project2Component } from './modules/projects/pages/project-2/project-2.component';
import { Project3Component } from './modules/projects/pages/project-3/project-3.component';
import { Project4Component } from './modules/projects/pages/project-4/project-4.component';
import { Project5Component } from './modules/projects/pages/project-5/project-5.component';
import { Project6Component } from './modules/projects/pages/project-6/project-6.component';
import { Service1Component } from './modules/services/pages/service1/service1.component';
import { Service2Component } from './modules/services/pages/service2/service2.component';
import { TeamsComponent } from './modules/teams/pages/teams/teams.component';
import { ContentComponent } from './modules/showcase/components/content/content.component';


export const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { path: 'home-2', component: ContentComponent },
      { path: 'portfolio-1', component: Portfolio1Component },
      { path: 'portfolio-2', component: Portfolio2Component },
      { path: 'portfolio-3', component: Portfolio3Component },
      { path: 'project-1', component: Project1Component },
      { path: 'project-2', component: Project2Component },
      { path: 'project-3', component: Project3Component },
      { path: 'project-4', component: Project4Component },
      { path: 'project-5', component: Project5Component },
      { path: 'project-6', component: Project6Component },
      { path: 'team', component: TeamsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'publication', component: PublicationComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'services', component: Service1Component },
      { path: 'service', component: Service2Component },  
       
      { path: '', redirectTo: '/home-2', pathMatch: 'full' } // Default route
    ]
  }
];

