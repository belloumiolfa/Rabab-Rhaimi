import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GalleryService } from '../../../../backend/services/gallery.service';

interface GalleryItem {
  id: number;
  name: string;
  image_url: string;
}

@Component({
  selector: 'app-port3',
  standalone: true,
  imports: [CommonModule, CarouselModule, ReactiveFormsModule],
  templateUrl: './port3.component.html',
  styleUrls: ['./port3.component.css']
})
export class Port3Component implements OnInit {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;

  projects: GalleryItem[] = [];
  activeSlideIndex = 1;
  totalSlides = 0;
  currentProjectName = '';
  currentProject: GalleryItem | null = null;

  isAdmin = false;

  form!: FormGroup;
  selectedFile: File | null = null;
  showModal = false;
  isEdit = false;
  editingId: number | null = null;

  customOptions: OwlOptions = {
    loop: false,
    margin: 20,
    center: true,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 1.5 },
      1200: { items: 1.8 }
    }
  };

  constructor(private galleryService: GalleryService, private fb: FormBuilder) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.isAdmin = user?.role === 'Dentiste';

    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['']
    });

    this.loadGallery();
  }

  loadGallery(): void {
    this.galleryService.getAll().subscribe(data => {
      this.projects = data;
      this.totalSlides = data?.length || 0;
      this.activeSlideIndex = 1;
      this.currentProject = data?.[0] || null;
      this.currentProjectName = this.currentProject?.name || '';
    });
  }

  onTranslated(event: any): void {
    const index = event.startPosition;
    this.activeSlideIndex = index + 1;
    this.currentProject = this.projects[index] || null;
    this.currentProjectName = this.currentProject?.name || '';
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  openAdd(): void {
    this.isEdit = false;
    this.showModal = true;
    this.form.reset();
    this.selectedFile = null;
    this.editingId = null;
  }

  openEdit(item: GalleryItem): void {
    this.isEdit = true;
    this.showModal = true;
    this.form.patchValue({ name: item.name });
    this.editingId = item.id;
    this.selectedFile = null;
  }

  save(): void {
    const { name } = this.form.value;
    const formData = new FormData();
    formData.append('name', name);

    if (this.isEdit && this.editingId !== null) {
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      this.galleryService.update(this.editingId, formData).subscribe(() => {
        this.loadGallery();
        this.closeModal();
      });
    } else {
      if (!this.selectedFile) {
        alert('Veuillez sélectionner une image.');
        return;
      }
      formData.append('image', this.selectedFile);
      this.galleryService.create(formData).subscribe(() => {
        this.loadGallery();
        this.closeModal();
      });
    }
  }

  delete(id: number): void {
    if (confirm('Supprimer cette image ?')) {
      this.galleryService.delete(id).subscribe(() => this.loadGallery());
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.form.reset();
    this.selectedFile = null;
  }
}
