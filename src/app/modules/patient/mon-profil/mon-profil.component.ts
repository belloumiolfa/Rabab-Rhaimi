import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mon-profil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  userData: any = {};
  selectedFile: File | null = null;
  patientId: string = '';
  showModal = false;

  formData: any = {
    name: '',
    firstname: '',
    phone: '',
  };

  profileImageFile: File | null = null;
  coverImageFile: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.patientId = user?.id || '';
    this.loadProfile();
  }

  // ✅ Charger les infos utilisateur
  loadProfile() {
    this.http.get(`http://localhost:3000/api/user/profile/${this.patientId}`).subscribe({
      next: (data: any) => {
        this.userData = data;
        this.formData = {
          name: data.name,
          firstname: data.firstname,
          phone: data.phone
        };
      },
      error: (err) => {
        console.error('❌ Erreur profil :', err);
      }
    });
  }

  // ✅ Fichier sélectionné (photo de profil ou couverture)
  onFileChange(event: any, type: 'profile' | 'cover') {
    const file = event.target.files[0];
    if (type === 'profile') this.profileImageFile = file;
    if (type === 'cover') this.coverImageFile = file;
  }

  // ✅ Mise à jour du profil
  updateProfile() {
    const form = new FormData();
    form.append('name', this.formData.name);
    form.append('firstname', this.formData.firstname);
    form.append('phone', this.formData.phone);
    if (this.profileImageFile) form.append('profile_picture', this.profileImageFile);
    if (this.coverImageFile) form.append('cover_photo', this.coverImageFile);

    this.http.put(`http://localhost:3000/api/user/update/${this.patientId}`, form).subscribe({
      next: () => {
        alert('✅ Profil mis à jour');
        this.showModal = false;
        this.loadProfile();
      },
      error: () => alert('❌ Erreur lors de la mise à jour')
    });
  }

  // ✅ Upload d'une seule image (ancienne méthode — facultatif si `updateProfile` est utilisé)
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (!this.selectedFile || !this.userData.id) return;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post(`http://localhost:3000/api/user/upload/${this.userData.id}`, formData).subscribe({
      next: () => {
        alert('✅ Image uploadée');
        this.loadProfile();
      },
      error: () => alert('❌ Erreur upload image'),
    });
  }
  getProfilePictureUrl(): string {
    if (this.userData?.profile_picture) {
      return `http://localhost:3000/uploads/profile/${this.userData.profile_picture}`;
    }
    return `http://localhost:3000/uploads/default-profile.jpg`; // image par défaut
  }
  
  getCoverPhotoUrl(): string {
    if (this.userData?.cover_photo) {
      return `http://localhost:3000/uploads/${this.userData.cover_photo}`;
    }
    return `http://localhost:3000/uploads/default-cover.jpg`; // image par défaut
  }
  
}
