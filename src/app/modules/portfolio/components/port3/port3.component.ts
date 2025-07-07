import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CarouselModule,
  OwlOptions,
  CarouselComponent,
} from 'ngx-owl-carousel-o';

interface GalleryItem {
  id: number;
  name: string;
  image_url: string /* chemin vers l'image */;
}

@Component({
  selector: 'app-port3',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './port3.component.html',
  styleUrls: ['./port3.component.css'],
})
export class Port3Component implements OnInit {
  @ViewChild('owlCarousel', { static: false })
  owlCarousel!: CarouselComponent;

  /** ➜ Contenu statique */
  projects: GalleryItem[] = [
    {
      id: 1,
      name: 'Implant dentaire',
      image_url: 'assets/img/gallery/cas1.png',
    },
    {
      id: 2,
      name: 'Facette Dentaire',
      image_url: 'assets/img/gallery/cas2.png',
    },
    /*  {
      id: 3,
      name: 'Facette Dentaire',
      image_url: 'assets/img/gallery/cas4.png',
    }, */

    {
      id: 4,
      name: 'Facettes dentaires',
      image_url: 'assets/img/gallery/cas3.png',
    },
  ];

  /** Index du slide actif (1-based pour l’affichage) */
  activeSlideIndex = 1;
  totalSlides = this.projects.length;
  currentProjectName = this.projects[0]?.name ?? '';

  /** Options OwlCarousel */
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
      1200: { items: 1.8 },
    },
  };

  ngOnInit(): void {
    /* rien d’autre à faire : tout est statique */
  }

  /** Mise à jour du compteur et du nom lorsqu’on change de slide */
  onTranslated(event: any): void {
    const index = event.startPosition; // 0-based
    this.activeSlideIndex = index + 1; // 1-based pour l'UI
    this.currentProjectName = this.projects[index]?.name ?? '';
  }
}
