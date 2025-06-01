import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodayPatientsComponent } from "../today-patients/today-patients.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-secretaire',
  imports: [RouterModule],

  templateUrl: './dashboard-secretaire.component.html',
  styleUrl: './dashboard-secretaire.component.css'
})
export class DashboardSecretaireComponent implements OnInit{
  userData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const id = user?.id;

    if (id) {
      this.http.get(`http://localhost:3000/api/user/profile/${id}`).subscribe({
        next: (data) => this.userData = data,
        error: () => console.error('Erreur chargement profil dentiste')
      });
    }
  }

  getProfilePictureUrl(): string {
    if (this.userData?.profile_picture && this.userData.profile_picture !== 'default-profile.jpg') {
      return `http://localhost:3000/uploads/profile/${this.userData.profile_picture}`;
    }
    return `http://localhost:3000/uploads/defaults/default-profile.jpg`;
  }
}
