import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../../../backend/services/experience.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule] // ⬅️ IMPORTANT : pour pipes comme "date"

})
export class OtherServiceComponent implements OnInit {
  experiences: any[] = [];
  showModal = false;
  isEdit = false;
  selected: any = null;
  form!: FormGroup;
  isAdminUser: boolean = false; // <-- nouvelle variable

  constructor(private service: ExperienceService, private fb: FormBuilder) {}

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

    this.loadExperiences();
    this.form = this.fb.group({
      title: ['', Validators.required],
      institution: ['', Validators.required],
      location: [''],
      start_date: ['', Validators.required],
      end_date: ['']
    });
  }


  loadExperiences() {
    this.service.getAll().subscribe(data => {
      this.experiences = data;
    });
  }

  openAdd() {
    this.isEdit = false;
    this.form.reset();
    this.showModal = true;
  }

  openEdit(exp: any) {
    this.isEdit = true;
    this.selected = exp;
    this.form.patchValue(exp);
    this.showModal = true;
  }

  save() {
    if (this.form.invalid) return;
    const data = this.form.value;
    if (this.isEdit && this.selected?.id) {
      this.service.update(this.selected.id, data).subscribe(() => {
        this.loadExperiences();
        this.showModal = false;
      });
    } else {
      this.service.create(data).subscribe(() => {
        this.loadExperiences();
        this.showModal = false;
      });
    }
  }

  deleteExperience(id: number) {
    if (confirm('Supprimer cette expérience ?')) {
      this.service.delete(id).subscribe(() => this.loadExperiences());
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
