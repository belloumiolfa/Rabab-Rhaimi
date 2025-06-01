import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AwardService } from '../../../../backend/services/award.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-port2',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './port2.component.html',
  styleUrls: ['./port2.component.css'] // <- corrected from styleUrl
})
export class Port2Component implements OnInit {


  awards: { id: number; title: string; image_url: string; }[] = [];
  form!: FormGroup;
  showModal = false;
  isEdit = false;
  selectedAward: any = null;
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  isAdmin = false;

  constructor(private awardService: AwardService, private fb: FormBuilder) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.isAdmin = user?.role === 'Admin' || user?.role === 'Dentiste';
    this.loadAwards();

    this.form = this.fb.group({
      title: ['', Validators.required],
      image: [null] // added for patching value correctly
    });
  }

  loadAwards() {
    this.awardService.getAll().subscribe(data => {
      console.log('Récompenses chargées :', data); // ← À garder
      this.awards = data.map((award: any) => {
        // On s'assure que l'image a bien un chemin absolu
        return {
          ...award,
          image_url: `http://localhost:3000${award.image_url}`
        };
      });
    });
  }
  

  openAdd() {
    this.isEdit = false;
    this.selectedAward = null;
    this.previewUrl = null;
    this.selectedFile = null;
    this.form.reset();
    this.showModal = true;
  }

  openEdit(award: any) {
    this.isEdit = true;
    this.selectedAward = award;
    this.form.patchValue({ title: award.title });
    this.previewUrl = award.image_url;
    this.showModal = true;
  }

  onFileChange(event: any) {
  const file = event.target.files[0];
  this.selectedFile = file;

  if (file) {
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result as string;
    reader.readAsDataURL(file);
  }
}


  saveAward() {
    const formData = new FormData();
    formData.append('title', this.form.get('title')?.value);
  
    if (!this.selectedFile) {
      alert('Veuillez sélectionner une image');
      return;
    }
  
    formData.append('image', this.selectedFile);
  
    if (this.isEdit && this.selectedAward?.id) {
      this.awardService.update(this.selectedAward.id, formData).subscribe(() => {
        this.loadAwards();
        this.closeModal();
      });
    } else {
      this.awardService.create(formData).subscribe(() => {
        this.loadAwards();
        this.closeModal();
      });
    }
  }
  

  deleteAward(id: number) {
    if (confirm('Supprimer cette récompense ?')) {
      this.awardService.delete(id).subscribe(() => this.loadAwards());
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
