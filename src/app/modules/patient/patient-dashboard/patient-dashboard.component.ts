import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  imports:[RouterModule],
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  userData: any = {};

  constructor(private http: HttpClient) {}

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
  getProfileImageUrl(): string {
    const filename = this.userData?.profile_picture;
  
    if (!filename) return 'http://localhost:3000/uploads/default-profile.jpg';
  
    // 👉 S'il s'agit de la photo par défaut
    if (filename === 'default-profile.jpg') {
      return 'http://localhost:3000/uploads/' + filename;
    }
  
    // 👉 Sinon c’est une photo personnalisée
    return 'http://localhost:3000/uploads/profile/' + filename;
  }
  
}
