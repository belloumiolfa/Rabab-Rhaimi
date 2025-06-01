import { Component, OnInit } from '@angular/core'; // <-- Ajout de OnInit ici
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DegreeService } from '../../../../backend/services/degree.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service22',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './service22.component.html',
  styleUrls: ['./service22.component.css'] // ← correction: c’est style**Urls** et non styleUrl
})
export class Service22Component implements OnInit { // <-- Ajout ici aussi
  degrees: any[] = [];
  form!: FormGroup;
  showModal = false;
  isEdit = false;
  selectedDegree: any = null;
  isAdminUser: boolean = false; // <-- nouvelle variable

  constructor(private degreeService: DegreeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const role = JSON.parse(user).role;
        console.log("Rôle utilisateur :", role);
        this.isAdminUser = role === 'Dentiste' || role === 'Admin';
      } catch {
        this.isAdminUser = false;
      }
    }
  
    this.loadDegrees();
  
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      start_year: ['', Validators.required],
      end_year: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  

  
  

  loadDegrees() {
    this.degreeService.getAll().subscribe((data) => {
      console.log('Données chargées :', data);
      // ✅ NE PAS écraser avec "this.degrees = data" ensuite
      this.degrees = data.map(d => ({ ...d, show: false }));
      console.log("Données reçues : ", this.degrees);

    });
  }
  
  
  

  openAddModal() {
    this.form.reset();
    this.isEdit = false;
    this.selectedDegree = null;
    this.showModal = true;
  }

  openEditModal(degree: any) {
    this.form.patchValue(degree);
    this.selectedDegree = degree;
    this.isEdit = true;
    this.showModal = true;
  }

  saveDegree() {
    if (this.form.invalid) return;
    const degreeData = this.form.value;

    if (this.isEdit && this.selectedDegree?.id) {
      this.degreeService.update(this.selectedDegree.id, degreeData).subscribe(() => {
        this.loadDegrees();
        this.showModal = false;
      });
    } else {
      this.degreeService.create(degreeData).subscribe(() => {
        this.loadDegrees();
        this.showModal = false;
      });
    }
  }

  deleteDegree(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce diplôme ?')) {
      this.degreeService.delete(id).subscribe(() => this.loadDegrees());
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
