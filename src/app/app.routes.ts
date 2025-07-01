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
import { SignupComponent } from './backend/auth/signup/signup.component';
import { ForgotPasswordComponent } from './backend/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './backend/reset-password/reset-password.component';
import { PatientDashboardComponent } from './modules/patient/patient-dashboard/patient-dashboard.component';
import { PrendreRdvWrapperComponent } from './modules/patient/prendre-rdv-wrapper/prendre-rdv-wrapper.component';
import { MesRendezVousComponent } from './modules/patient/mes-rendez-vous/mes-rendez-vous.component';
import { DossierMedicalComponent } from './modules/patient/dossier-medical/dossier-medical.component';
import { MonProfilComponent } from './modules/patient/mon-profil/mon-profil.component';
import { TemoignagesComponent } from './modules/patient/temoignages/temoignages.component';
import { DashboardHomeComponent } from './modules/patient/dashboard-home/dashboard-home.component';
import { DashboardSecretaireComponent } from './modules/secretaire/dashboard-secretaire/dashboard-secretaire.component';
import { ManageAppointmentsComponent } from './modules/secretaire/manage-appointments/manage-appointments.component';
import { TodayPatientsComponent } from './modules/secretaire/today-patients/today-patients.component';
import { ProfileComponent } from './modules/secretaire/profile/profile.component';
import { Publication2Component } from './modules/blog/pages/publication2/publication2.component';
import { Publication3Component } from './modules/blog/pages/publication3/publication3.component';
import { Publication4Component } from './modules/blog/pages/publication4/publication4.component';
import { MainComponent } from './modules/showcase/pages/main/main.component';
import { CreerMotDePasseComponent } from './modules/secretaire/creer-mot-de-passe/creer-mot-de-passe.component';
import { ManageAvailabilityCalendarComponent } from './modules/secretaire/manage-availability-calendar/manage-availability-calendar.component';
import { ManageAvailabilityCalendarWrapperComponent } from './modules/secretaire/manage-availability-calendar-wrapper/manage-availability-calendar-wrapper.component';
import { HistoryPatientComponent } from './modules/secretaire/history-patient/history-patient.component';
import { HistoryGlobalComponent } from './modules/secretaire/history-global/history-global.component';
import { DashboardDentisteComponent } from './modules/dentiste/dashboard-dentiste/dashboard-dentiste.component';
import { DossiersPatientsComponent } from './modules/dentiste/dossiers-patients/dossiers-patients.component';
import { ListePatientsComponent } from './modules/dentiste/liste-patients/liste-patients.component';
import { NotificationsPageComponent } from './modules/patient/notifications-page/notifications-page.component';
import { ModifierDateComponent } from './modules/patient/modifier-date/modifier-date.component';
import { ConfirmationRdvComponent } from './modules/patient/confirmation-rdv/confirmation-rdv.component';
import { AuthGuard } from './backend/auth.guard';
import { TestimonialManagementComponent } from './modules/secretaire/testimonial-management/testimonial-management.component';
import { DemandesUrgentesComponent } from './modules/dentiste/demandes-urgentes/demandes-urgentes.component';
import { ConfirmUrgenceComponent } from './modules/patient/confirm-urgence/confirm-urgence.component';
import { SecretaryStatsComponent } from './modules/secretaire/secretary-stats/secretary-stats.component';

export const routes: Routes = [
  {
    path: 'patient-dashboard',
    component: PatientDashboardComponent,
    canActivate: [AuthGuard], // 🔐 Ici on sécurise !
    children: [
      { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' },
      { path: 'dashboard-home', component: DashboardHomeComponent },
      /*  {
        path: 'prendre-rdv',
        component: PrendreRdvWrapperComponent,
        children: [
          {
            path: 'modifier-date/:id',
            component: ModifierDateComponent,
          },
        ],
      }, */
      { path: 'mes-rendez-vous', component: MesRendezVousComponent },
      { path: 'dossier-medical', component: DossierMedicalComponent },
      { path: 'mon-profil', component: MonProfilComponent },
      { path: 'temoignages', component: TemoignagesComponent },
      { path: 'notifications', component: NotificationsPageComponent },
      /*   {
        path: 'confirmation-rdv/:id',
        component: ConfirmationRdvComponent,
        data: {
          renderMode: 'ssr', // or 'client'
        },
      }, 
      {
        path: 'confirm-urgence/:id',
        component: ConfirmUrgenceComponent,
        data: {
          renderMode: 'ssr', // or 'client'
        },
      },*/
    ],
  },
  {
    path: 'dashboard-secretaire',
    component: DashboardSecretaireComponent,
    children: [
      { path: '', redirectTo: 'statistique', pathMatch: 'full' }, // ✅ page par défaut
      { path: 'rendez-vous', component: ManageAppointmentsComponent },
      { path: 'accueil-patients', component: TodayPatientsComponent },
      { path: 'profil', component: ProfileComponent },
      /*  {
        path: 'availability',
        component: ManageAvailabilityCalendarWrapperComponent,
      }, */
      { path: 'today', component: TodayPatientsComponent },
      /*   {
        path: 'history/:id',
        component: HistoryPatientComponent,
        data: {
          renderMode: 'ssr', // or 'client'
        },
      }, */
      { path: 'history-global', component: HistoryGlobalComponent },
      { path: 'mon-profil', component: MonProfilComponent },
      { path: 'temoignages', component: TestimonialManagementComponent },
      { path: 'statistique', component: SecretaryStatsComponent },
    ],
  },

  {
    path: 'dashboard-dentiste',
    component: DashboardDentisteComponent,
    children: [
      { path: 'rendez-vous', component: ManageAppointmentsComponent },
      { path: 'accueil-patients', component: TodayPatientsComponent },
      {
        path: 'availability',
        component: ManageAvailabilityCalendarWrapperComponent,
      },
      { path: 'mon-profil', component: MonProfilComponent },
      /*  {
        path: 'dossiers/:id',
        component: DossiersPatientsComponent,
        data: {
          renderMode: 'ssr', // or 'client'
        },
      }, */
      { path: 'liste-patients', component: ListePatientsComponent },
      { path: 'history-global', component: HistoryGlobalComponent },
      /*  {
        path: 'history/:id',
        component: HistoryPatientComponent,
        data: {
          renderMode: 'ssr', // or 'client'
        },
      }, */
      { path: 'today', component: TodayPatientsComponent },
      { path: 'demandes-urgentes', component: DemandesUrgentesComponent },
      { path: 'notifications', component: NotificationsPageComponent },
      { path: 'statistique', component: SecretaryStatsComponent },

      { path: '', redirectTo: 'statistique', pathMatch: 'full' },
    ],
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'awards', component: Portfolio2Component },
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
      { path: 'gallery', component: Portfolio3Component },
      { path: 'portfolio-1', component: Portfolio1Component },
      { path: 'blog', component: BlogComponent },
      { path: 'blanchiment', component: PublicationComponent },
      { path: 'implant-dentaire', component: Publication2Component },
      { path: 'prevention-dentaire', component: Publication3Component },
      { path: 'detartrage', component: Publication4Component },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ],
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  { path: '**', component: Service2Component },
];
