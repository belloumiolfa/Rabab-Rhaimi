import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creer-mot-de-passe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creer-mot-de-passe.component.html',
})
export class CreerMotDePasseComponent {
  password = '';
  confirmPassword = '';
  token = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.token = this.route.snapshot.params['token'];
  }

  enregistrer() {
    if (this.password !== this.confirmPassword) {
      alert('❌ Les mots de passe ne correspondent pas.');
      return;
    }

    this.http.post('http://localhost:3000/api/patients/set-password', {
      token: this.token,
      password: this.password
    }).subscribe({
      next: () => alert('✅ Mot de passe créé avec succès. Vous pouvez vous connecter.'),
      error: () => alert('❌ Erreur création mot de passe.')
    });
  }
}
