import { CursorComponent } from "./modules/showcase/components/cursor/cursor.component";
import { PreloaderComponent } from "./modules/showcase/components/preloader/preloader.component";
import { ScrollbarComponent } from "./modules/showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "./modules/showcase/components/menu/menu.component";
import { CurtainComponent } from "./modules/showcase/components/curtain/curtain.component";
import { FrameComponent } from "./modules/showcase/components/frame/frame.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwupService } from './swup.service';
import Swup from 'swup';
import { ContentComponent } from "./modules/showcase/components/content/content.component";
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Fancybox } from "@fancyapps/ui";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CursorComponent,
    PreloaderComponent,
    ScrollbarComponent,
    MenuComponent,
    CurtainComponent,
    FrameComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('500ms ease-in')]),
      transition(':leave', [animate('500ms ease-out')]),
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'rabeb';

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuFrame') menuFrame!: ElementRef;

  swup!: Swup;
  afficherContenu = false;

  constructor(private swupService: SwupService) {}

  ngOnInit() {
    this.swupService.initSwup();
  } 

  ngAfterViewInit() {
    // Initialisation de Swup
    this.swup = new Swup({
      containers: ['#swup'],
      animateHistoryBrowsing: true
    });

    // Preloader Animation (GSAP)
    const timeline = gsap.timeline();

    timeline.to(".mil-preloader-animation", { opacity: 1 });

    timeline.fromTo(
      ".mil-animation-1 .mil-h3",
      { y: "30px", opacity: 0 },
      { y: "0px", opacity: 1, stagger: 0.4 }
    );

    // ScrollTrigger Animation
    gsap.from(".mil-scroll-item", {
      scrollTrigger: {
        trigger: ".mil-scroll-item",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Gestion du menu principal
    if (this.menuBtn && this.menu && this.menuFrame) {
      this.menuBtn.nativeElement.addEventListener('click', () => {
        this.menuBtn.nativeElement.classList.toggle('mil-active');
        this.menu.nativeElement.classList.toggle('mil-active');
        this.menuFrame.nativeElement.classList.toggle('mil-active');
      });
    }

    // Gestion des sous-menus
    document.querySelectorAll('.mil-has-children a').forEach((menuItem) => {
      const item = menuItem as HTMLElement;
      item.addEventListener('click', () => {
        document.querySelectorAll('.mil-has-children ul').forEach((ul) => {
          const list = ul as HTMLElement;
          list.classList.remove('mil-active');
        });

        document.querySelectorAll('.mil-has-children a').forEach((link) => {
          const anchor = link as HTMLElement;
          anchor.classList.remove('mil-active');
        });

        item.classList.toggle('mil-active');

        const sibling = item.nextElementSibling as HTMLElement | null;
        if (sibling && sibling.classList) {
          sibling.classList.toggle('mil-active');
        }
      });
    });

    // Affichage du menu principal si présent
    const menu = document.getElementById('menu');
    if (menu) {
      menu.style.display = 'block';
    }

    // Initialisation de Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // Rafraîchir ScrollTrigger pour les animations dynamiques
    ScrollTrigger.refresh();
  }

  toggleContenu() {
    this.afficherContenu = !this.afficherContenu;
  }
}
