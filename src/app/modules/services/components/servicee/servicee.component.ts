import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../../../backend/services/service.service';
@Component({
  selector: 'app-servicee',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './servicee.component.html',
  styleUrl: './servicee.component.css'
})
export class ServiceeComponent implements OnInit {
  services: any[] = [];
  form!: FormGroup;
  isEdit = false;
  showModal = false;
  selectedService: any = null;
  isAdmin = false;

  constructor(private fb: FormBuilder, private serviceService: ServiceService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.isAdmin = user?.role === 'Dentiste';

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.loadServices();
  }

  loadServices() {
    this.serviceService.getAll().subscribe(data => {
      this.services = data;
    });
  }

  openAdd() {
    this.isEdit = false;
    this.form.reset();
    this.selectedService = null;
    this.showModal = true;
  }

  openEdit(service: any) {
    this.isEdit = true;
    this.selectedService = service;
    this.form.patchValue({
      title: service.title,
      description: service.description
    });
    this.showModal = true;
  }

  saveService() {
    const formData = this.form.value;

    if (this.isEdit && this.selectedService?.id) {
      this.serviceService.update(this.selectedService.id, formData).subscribe(() => {
        this.loadServices();
        this.closeModal();
      });
    } else {
      this.serviceService.create(formData).subscribe(() => {
        this.loadServices();
        this.closeModal();
      });
    }
  }

  deleteService(id: number) {
    if (confirm('Supprimer ce service ?')) {
      this.serviceService.delete(id).subscribe(() => this.loadServices());
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
