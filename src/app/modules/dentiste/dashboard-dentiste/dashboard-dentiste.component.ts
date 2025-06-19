import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../patient/header/header.component";
import { AuthService } from '../../../backend/services/auth.service';

@Component({
  selector: 'app-dashboard-dentiste',
  templateUrl: './dashboard-dentiste.component.html',
  styleUrls: ['./dashboard-dentiste.component.css'],
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent]
})
export class DashboardDentisteComponent implements OnInit {
  userData: any = {};

  constructor(private http: HttpClient, private authService: AuthService) {}

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

   onLogout(): void {
    this.authService.logout();
  }
}