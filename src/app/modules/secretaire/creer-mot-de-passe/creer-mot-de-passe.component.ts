import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creer-mot-de-passe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creer-mot-de-passe.component.html',
  styleUrls: ['./creer-mot-de-passe.component.css']
})
export class CreerMotDePasseComponent {
  password = '';
  confirmPassword = '';
  token = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.token = this.route.snapshot.params['token'];
  }

  enregistrer() {
    if (!this.password || !this.confirmPassword) {
      alert('❗ Veuillez remplir tous les champs.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('❌ Les mots de passe ne correspondent pas.');
      return;
    }

    this.http.post('http://localhost:3000/api/patients/set-password', {
      token: this.token,
      password: this.password
    }).subscribe({
      next: () => {
        alert('✅ Mot de passe défini avec succès. Vous pouvez maintenant vous connecter.');
        this.router.navigate(['/main/login']); // 🔄 Redirection vers la page de login
      },
      error: (err) => {
        console.error('Erreur création mot de passe', err);
        alert(err.error?.message || '❌ Erreur serveur.');
      }
    });
  }
}
