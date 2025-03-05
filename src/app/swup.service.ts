import { Injectable } from '@angular/core';
import Swup from 'swup';
import Swiper from 'swiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fancybox } from "@fancyapps/ui";

@Injectable({
  providedIn: 'root'
})
export class SwupService {
  private swup: Swup | null = null;

  constructor() {}

  initSwup() {
    this.swup = new Swup({
      containers: ["#swup"],
      linkSelector: 'a[data-swup-preload]'
    });

    if (this.swup) {
      this.swup.hooks.on('page:view', () => {
        console.log('Swup a chargé une nouvelle page !');
        this.reactivateAnimations();
      });

      // 🔄 Réactiver les animations après un changement de page
      this.reactivateAnimations();
    }
  }

  reactivateAnimations() {
    // Réactiver Swiper
    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: { delay: 3000 },
          pagination: { el: '.swiper-pagination', clickable: true }
        });
      }

      // Réactiver GSAP ScrollTrigger
      if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();
      }

      // Réactiver Fancybox
      if (typeof Fancybox !== 'undefined') {
        Fancybox.bind("[data-fancybox]", {});
      }
    }, 500); // 🔹 Petite pause pour que le DOM soit prêt
  }
}
