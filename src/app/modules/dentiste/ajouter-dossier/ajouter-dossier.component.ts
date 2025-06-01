import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-dossier',
  imports: [FormsModule],
  templateUrl: './ajouter-dossier.component.html',
  styleUrl: './ajouter-dossier.component.css'
})
export class AjouterDossierComponent {
  selectedFile: File | null = null;

formData = {
  patient_id: '',
  appointment_id: '',
  diagnosis: '',
  treatment: '',
  notes: ''
};

constructor(private http: HttpClient) {}

onFileChange(event: any) {
  this.selectedFile = event.target.files[0];
}

submit() {
  const data = new FormData();
  for (const key in this.formData) {
    data.append(key, (this.formData as any)[key]);
  }
  if (this.selectedFile) {
    data.append('document', this.selectedFile);
  }

  this.http.post('http://localhost:3000/api/medical-records/add', data).subscribe({
    next: () => alert('✅ Dossier médical ajouté'),
    error: () => alert('❌ Erreur lors de l’ajout')
  });
}

}
