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
import { CursorComponent } from './modules/showcase/components/cursor/cursor.component';
import { PreloaderComponent } from './modules/showcase/components/preloader/preloader.component';
import { ScrollbarComponent } from './modules/showcase/components/scrollbar/scrollbar.component';
import { MenuComponent } from './modules/showcase/components/menu/menu.component';
import { CurtainComponent } from './modules/showcase/components/curtain/curtain.component';
import { FrameComponent } from './modules/showcase/components/frame/frame.component';
import { BannerPubComponent } from './modules/blog/components/banner-pub/banner-pub.component';
import { PubComponent } from './modules/blog/components/pub/pub.component';
import { SimilarComponent } from './modules/blog/components/similar/similar.component';
import { FooterComponent } from './modules/showcase/components/footer/footer.component';
import { HiddenElementsComponent } from './modules/showcase/components/hidden-elements/hidden-elements.component';


export const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { 
    path: 'publication', 
    component: PublicationComponent,
    children: [
      { path: 'cursor', component: CursorComponent  }, 
      { path: 'preloader', component: PreloaderComponent },
      { path: 'scrollbar', component: ScrollbarComponent  }, 
      { path: 'menu', component: MenuComponent },
      { path: 'curtain', component: CurtainComponent  }, 
      { path: 'frame', component: FrameComponent },
      { path: 'content', component: ContentComponent ,
        children:[
          { path: 'cursor', component: BannerPubComponent  }, 
          { path: 'preloader', component: PubComponent },
          { path: 'scrollbar', component: SimilarComponent  }, 
          { path: 'menu', component: FooterComponent },
          { path: 'curtain', component: HiddenElementsComponent  }, 
        ]
      }, 
    ]
  },
  {
    path: 'portfolio',
    children: [
      { path: 'portfolio-1', component: Portfolio1Component },
      { path: 'portfolio-2', component: Portfolio2Component },
      { path: 'portfolio-3', component: Portfolio3Component }
    ]
  },
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
      { path: 'services', component: Service1Component },
      { path: 'service', component: Service2Component },  
       
      { path: '', redirectTo: '/home-2', pathMatch: 'full' } // Default route
    ]
  }
];

