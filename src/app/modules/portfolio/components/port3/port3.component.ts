import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-port3',
  standalone: true,
  imports: [CarouselModule, RouterModule, CommonModule],
  templateUrl: './port3.component.html',
  styleUrls: ['./port3.component.css']
})
export class Port3Component {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;

  activeSlideIndex = 1;
  totalSlides = 4;
  currentProjectName = 'Correction des dents écartées';

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
  
 

  projects = [
    { image: 'assets/img/gallery/1.png', name: 'Correction des dents écartées' },
    { image: 'assets/img/gallery/2.png', name: 'Réparation des dents cassées' },
    { image: 'assets/img/gallery/3.png', name: ' Blanchiment progressif des dents' },
    { image: 'assets/img/gallery/4.png', name: 'Traitement des caries sévères' },
  ];

  onTranslated(event: any) {
    const currentIndex = event.startPosition;
    this.activeSlideIndex = currentIndex + 1;
    this.currentProjectName = this.projects[currentIndex]?.name || 'Unknown Project';
  }
}
