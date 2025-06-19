// confirm-urgence.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-urgence',
  standalone: true,
  templateUrl: './confirm-urgence.component.html',
  imports:[CommonModule]
})
export class ConfirmUrgenceComponent implements OnInit {
  message = '';
  success = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
  console.log('✅ Composant chargé'); // <- vérification importante
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    console.log('📩 Envoi confirmation RDV avec ID :', id);
    this.http.post(`http://localhost:3000/api/appointments/confirm-urgent/${id}`, {})
      .subscribe({
        next: () => {
          this.success = true;
          this.message = '✅ Votre rendez-vous a été confirmé avec succès.';
        },
        error: (err) => {
          console.error('  Erreur lors de la confirmation', err);
          this.success = false;
          this.message = '  Une erreur est survenue lors de la confirmation.';
        }
      });
  } else {
    console.warn('⚠️ Aucune ID trouvée dans l’URL');
  }
}

}
