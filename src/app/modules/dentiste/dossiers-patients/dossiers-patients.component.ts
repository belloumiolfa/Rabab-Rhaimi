import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dossiers-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dossiers-patients.component.html',
  styleUrls: ['./dossiers-patients.component.css']
})
export class DossiersPatientsComponent implements OnInit {
  dossiers: any[] = [];
  selectedPatientId: string = '';
  showResults = false;
  editData: any = {};
  showEditModal = false;

  showModal = false;
  newRecord: any = {
    diagnosis: '',
    treatment: '',
    notes: ''
  };

  selectedFiles: File[] = [];
  types: string[] = [];
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedPatientId = this.route.snapshot.paramMap.get('id') || '';
    if (this.selectedPatientId) {
      this.fetchDossiers();
    }
  }

  fetchDossiers() {
    this.http.get<any[]>(`http://localhost:3000/api/medical-records/patient/${this.selectedPatientId}`)
      .subscribe({
        next: (data) => {
          this.dossiers = data;
          this.showResults = true;
        },
        error: (err) => {
          console.error("❌ Erreur API :", err);
          alert("Erreur lors du chargement");
        }
      });
  }

  deleteRecord(id: string) {
    if (confirm("Supprimer ce dossier ?")) {
      this.http.delete(`http://localhost:3000/api/medical-records/${id}`).subscribe(() => {
        this.fetchDossiers();
      });
    }
  }

  closeModal() {
    this.showModal = false;
    this.newRecord = { diagnosis: '', treatment: '', notes: '' };
    this.selectedFiles = [];
    this.types = [];
  }

  onFileChange(event: any) {
    const files: File[] = Array.from(event.target.files);
    for (let file of files) {
      this.selectedFiles.push(file);
      this.types.push('autre'); // valeur par défaut pour chaque fichier
    }
    // Réinitialiser l'input pour pouvoir resélectionner les mêmes fichiers
    event.target.value = '';
  }
  

  submit() {
    const form = new FormData();
    form.append('patient_id', this.selectedPatientId);
    form.append('diagnosis', this.newRecord.diagnosis);
    form.append('treatment', this.newRecord.treatment);
    form.append('notes', this.newRecord.notes);
  
    this.selectedFiles.forEach((file, i) => {
      form.append('documents', file);         // ⬅️ ajoute chaque fichier avec le même nom
      form.append('types', this.types[i]);    // ⬅️ ajoute son type correspondant
    });
  
    this.http.post('http://localhost:3000/api/medical-records/add-multiple', form).subscribe({
      next: () => {
        alert('✅ Dossier(s) ajouté(s)');
        this.fetchDossiers();
        this.closeModal();
      },
      error: () => alert('❌ Erreur lors de l’ajout multiple')
    });
  }
  
  

  editRecord(dossier: any) {
    this.editData = { ...dossier };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editData = {};
    this.selectedFile = null;
  }

  updateRecord() {
    const formData = new FormData();
    formData.append('diagnosis', this.editData.diagnosis);
    formData.append('treatment', this.editData.treatment);
    formData.append('notes', this.editData.notes);
    if (this.selectedFile) {
      formData.append('document', this.selectedFile);
    }

    this.http.put(`http://localhost:3000/api/medical-records/${this.editData.id}`, formData)
      .subscribe(() => {
        alert('✅ Dossier modifié');
        this.closeEditModal();
        this.fetchDossiers();
      }, () => alert('❌ Erreur lors de la mise à jour'));
  }

  downloadPDF() {
    if (!this.selectedPatientId) return;
    const url = `http://localhost:3000/api/medical-records/export/pdf/${this.selectedPatientId}`;
    window.open(url, '_blank');
  }

  downloadCsv() {
    const url = `http://localhost:3000/api/medical-records/export-csv/${this.selectedPatientId}`;
    window.open(url, '_blank');
  }
  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
    this.types.splice(index, 1);
  }
  addFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFiles.push(file);
      this.types.push('autre'); // valeur par défaut
    }
    // Réinitialiser l'input pour permettre de rajouter le même fichier si nécessaire
    event.target.value = '';
  }
}
