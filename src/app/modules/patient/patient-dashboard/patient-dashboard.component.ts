import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { AuthService } from '../../../backend/services/auth.service'; // chemin corrigé

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  standalone: true,
  imports: [RouterModule, HeaderComponent]
})
export class PatientDashboardComponent implements OnInit {
  userData: any = {};

  // ✅ Un seul constructeur avec toutes les injections nécessaires
  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const id = user?.id;

    if (id) {
      this.http.get(`http://localhost:3000/api/user/profile/${id}`).subscribe({
        next: (data) => this.userData = data,
        error: () => console.error('Erreur lors du chargement du profil')
      });
    }
  }

  getProfilePictureUrl(): string {
    if (this.userData?.profile_picture && this.userData.profile_picture !== 'default-profile.jpg') {
      return `http://localhost:3000/uploads/profile/${this.userData.profile_picture}`;
    }
    return `http://localhost:3000/uploads/defaults/default-profile.jpg`;
  }

  onLogout(): void {
    this.authService.logout();
  }
}
