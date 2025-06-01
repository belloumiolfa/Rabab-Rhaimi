import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../backend/services/auth.service';
import { CertificationService } from '../../../../backend/services/certification.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  services: any[] = [];

  form!: FormGroup;
  showModal = false;
  isEdit = false;
  selectedCertif: any = null;

  constructor(
    private authService: AuthService,
    private certifService: CertificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadCertifications();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get isAdmin(): boolean {
    const user = localStorage.getItem('user');
    if (!user) return false;
    try {
      const role = JSON.parse(user).role;
      return role === 'Dentiste' || role === 'Admin';
    } catch {
      return false;
    }
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  loadCertifications() {
    this.certifService.getAll().subscribe(data => {
      this.services = data;
    });
  }

  openAddModal() {
    this.isEdit = false;
    this.form.reset();
    this.selectedCertif = null;
    this.showModal = true;
  }

  openEditModal(certif: any) {
    this.isEdit = true;
    this.selectedCertif = certif;
    this.form.patchValue(certif);
    this.showModal = true;
  }

  saveCertif() {
    if (this.form.invalid) return;
    const data = this.form.value;

    if (this.isEdit && this.selectedCertif) {
      this.certifService.update(this.selectedCertif.id, data).subscribe(() => {
        this.loadCertifications();
        this.closeModal();
      });
    } else {
      this.certifService.create(data).subscribe(() => {
        this.loadCertifications();
        this.closeModal();
      });
    }
  }

  deleteCertif(id: number) {
    if (confirm('Confirmer la suppression ?')) {
      this.certifService.delete(id).subscribe(() => this.loadCertifications());
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
