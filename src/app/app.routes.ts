import { Routes } from '@angular/router';

import { BlogComponent } from './modules/blog/pages/blog/blog.component';
import { PublicationComponent } from './modules/blog/pages/publication/publication.component';
import { ContactComponent } from './modules/contact/pages/contact/contact.component';
import { Portfolio1Component } from './modules/portfolio/pages/portfolio1/portfolio1.component';
import { Portfolio2Component } from './modules/portfolio/pages/portfolio2/portfolio2.component';
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
import { LoginComponent } from './backend/auth/login/login.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import {SignupComponent} from './backend/auth/signup/signup.component';
import{ ForgotPasswordComponent } from './backend/auth/forgot-password/forgot-password.component'
import { ResetPasswordComponent } from './backend/reset-password/reset-password.component';
import { PatientDashboardComponent } from './modules/patient/patient-dashboard/patient-dashboard.component';
import { PrendreRdvWrapperComponent } from './modules/patient/prendre-rdv-wrapper/prendre-rdv-wrapper.component';
import { MesRendezVousComponent } from './modules/patient/mes-rendez-vous/mes-rendez-vous.component';
import { DossierMedicalComponent } from './modules/patient/dossier-medical/dossier-medical.component';
import { MonProfilComponent } from './modules/patient/mon-profil/mon-profil.component';
import { TemoignagesComponent } from './modules/patient/temoignages/temoignages.component';
import { DashboardHomeComponent } from './modules/patient/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  // 🔹 Route autonome pour Blog
  { path: 'blog', component: BlogComponent },

  // 🔹 Route autonome pour Publication avec ses propres enfants
  {
    path: 'publication',
    component: PublicationComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'patient-dashboard',
    component: PatientDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' }, // ✅ Redirection par défaut
      { path: 'dashboard-home', component: DashboardHomeComponent },
      {path: 'prendre-rdv', component: PrendreRdvWrapperComponent},
      { path: 'mes-rendez-vous', component: MesRendezVousComponent },
      { path: 'dossier-medical', component: DossierMedicalComponent },
      { path: 'mon-profil', component: MonProfilComponent },
      { path: 'temoignages', component: TemoignagesComponent },
            

    ]
  },
  // 🔹 Route autonome pour Portfolio
     { path: 'gallery', component: Portfolio3Component },
   
  { path: 'awards', component: Portfolio2Component },

  {
    path: 'portfolio-1',
    component: Portfolio1Component,
    
  },


  // 🔹 Routes autonomes pour les autres composants
  { path: 'project-1', component: Project1Component },
  { path: 'project-2', component: Project2Component },
  { path: 'project-3', component: Project3Component },
  { path: 'project-4', component: Project4Component },
  { path: 'project-5', component: Project5Component },
  { path: 'project-6', component: Project6Component },
  { path: 'team', component: TeamsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: Service1Component },
  { path: 'service', component: Service2Component },

  // 🔹 Route par défaut sans `/dhome-2`
  { path: '', component: ContentComponent },

  // 🔹 Redirection en cas de route inexistante
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
