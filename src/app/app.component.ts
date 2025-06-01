import { CursorComponent } from "./modules/showcase/components/cursor/cursor.component";
import { ScrollbarComponent } from "./modules/showcase/components/scrollbar/scrollbar.component";
import { MenuComponent } from "./modules/showcase/components/menu/menu.component";
import { CurtainComponent } from "./modules/showcase/components/curtain/curtain.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Fancybox } from "@fancyapps/ui";
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import Swiper from 'swiper';
import 'swiper/css';
import { Router } from '@angular/router';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CursorComponent,
    ScrollbarComponent,
    MenuComponent,
    CurtainComponent,
    RouterModule,
    NgxGalleryModule,
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
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'rabeb';
  isMenuOpen: boolean = false;

  @ViewChild('menuBtn', { static: true }) menuBtn!: ElementRef;
  @ViewChild('menuFrame', { static: true }) menuFrame!: ElementRef;

  afficherContenu = false;
  private destroyListeners: (() => void)[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    this.preloaderAnimation();
    this.anchorScrollAnimation();
    this.accordionAnimation();
    this.cursorAnimation();
    this.scrollAnimations();
    this.infiniteSlider();
    this.initPortfolioAnimation();
    this.initSliders();
  }

  isDashboardRoute(): boolean {
    return this.router.url.startsWith('/dashboard');
  }
  ngAfterViewInit() {
    this.appendElements();
    this.backToTopAnimation();
    Fancybox.bind("[data-fancybox]", {});
    ScrollTrigger.refresh();
  }

  ngOnDestroy() {
    this.destroyListeners.forEach((destroy) => destroy());
  }

  // Suppression de Swup => suppression de initSwupTransitions()

  // ... (le reste de tes fonctions reste inchangé)

  initPortfolioAnimation(): void {
    const portfolioSlider = new Swiper('.mil-portfolio-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      parallax: true,
      mousewheel: { enabled: true },
      navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
      },
      pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
      },
    });

    gsap.from('.mil-portfolio-item', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.mil-portfolio-item',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });
  }

  initSliders(): void {
    new Swiper('.mil-infinite-show', {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 5000,
      autoplay: { delay: 0 },
      loop: true,
      freeMode: true,
      breakpoints: {
        992: { slidesPerView: 4 },
      },
    });

    new Swiper('.mil-portfolio-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      parallax: true,
      mousewheel: { enabled: true },
      navigation: {
        nextEl: '.mil-portfolio-next',
        prevEl: '.mil-portfolio-prev',
      },
      pagination: {
        el: '.swiper-portfolio-pagination',
        type: 'fraction',
      },
    });
  }

  fadeInAnimation(element: string, duration = 1): void {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: duration,
      ease: 'power2.out'
    });
  }

  accordionAnimation(): void {
    const groups = gsap.utils.toArray(".mil-accordion-group");
    const menus = gsap.utils.toArray(".mil-accordion-menu");

    menus.forEach((menu: any) => {
      menu.addEventListener("click", () => this.toggleMenu(menu, groups));
    });
  }

  toggleMenu(clickedMenu: HTMLElement, groups: any): void {
    groups.forEach((element: any) => {
      const box = element.querySelector(".mil-accordion-content");
      gsap.to(box, {
        height: clickedMenu === element ? 'auto' : 0,
        duration: 0.4,
        ease: 'sine'
      });
    });
  }

  scrollAnimations(): void {
    const elements = document.querySelectorAll(".mil-up");

    elements.forEach((section: any) => {
      gsap.fromTo(section,
        { opacity: 0, y: 40, scale: 0.98, ease: 'sine' },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }

  preloaderAnimation(): void {
    const timeline = gsap.timeline();

    timeline.to(".mil-preloader-animation", { opacity: 1 });

    timeline.fromTo(".mil-animation-1 .mil-h3",
      { y: "30px", opacity: 0 },
      { y: "0px", opacity: 1, stagger: 0.4 }
    );

    timeline.to(".mil-animation-1 .mil-h3", { opacity: 0, y: '-30' }, "+=.3");

    timeline.to(".mil-preloader", 0.8, { opacity: 0, ease: 'sine' }, "+=.2");

    timeline.fromTo(".mil-up", 0.8, { opacity: 0, y: 40, scale: .98, ease: 'sine' }, {
      y: 0,
      opacity: 1,
      scale: 1,
      onComplete: () => {
        const preloader = document.querySelector('.mil-preloader');
        if (preloader) {
          preloader.classList.add("mil-hidden");
        }
      }
    }, "-=1");
  }

  anchorScrollAnimation(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId!) as HTMLElement;

        if (target) {
          gsap.to(window, {
            scrollTo: target.offsetTop ? target.offsetTop - 90 : 0,
            duration: 0.4
          });
        }
      });
    });
  }

  cursorAnimation(): void {
    const cursor = document.querySelector('.mil-ball');
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    document.addEventListener('pointermove', (e) => {
      gsap.to(cursor, {
        duration: 0.6,
        ease: 'sine',
        x: e.clientX,
        y: e.clientY,
      });
    });
  }

  appendElements(): void {
    const arrow = document.querySelector('.mil-arrow')?.cloneNode(true);
    const dodecahedron = document.querySelector('.mil-dodecahedron')?.cloneNode(true);
    const lines = document.querySelector('.mil-lines')?.cloneNode(true);
    const activeLink = document.querySelector('.mil-main-menu ul li.mil-active > a')?.cloneNode(true);

    if (arrow) document.querySelector('.mil-arrow-place')?.appendChild(arrow);
    if (dodecahedron) document.querySelector('.mil-animation')?.appendChild(dodecahedron);
    if (lines) document.querySelector('.mil-lines-place')?.appendChild(lines);
    if (activeLink) document.querySelector('.mil-current-page')?.appendChild(activeLink);
  }

  backToTopAnimation(): void {
    const backToTopButton = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(backToTopButton, { x: -30, opacity: 0 });

    gsap.to(backToTopButton, {
      x: 0,
      opacity: 1,
      ease: 'sine',
      scrollTrigger: {
        trigger: "body",
        start: "top -40%",
        end: "top -40%",
        toggleActions: "play none reverse none"
      }
    });
  }

  infiniteSlider(): void {
    new Swiper('.mil-infinite-show', {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 5000,
      autoplay: { delay: 0 },
      loop: true,
      freeMode: true,
      breakpoints: {
        992: { slidesPerView: 4 },
      },
    });
  }
}
