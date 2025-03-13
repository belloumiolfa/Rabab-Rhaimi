import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent{
  ngAfterViewInit(): void {
    const swiper = new Swiper('.mil-reviews-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.mil-revi-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<div class="${className}">
                    <img src="../../../../../assets/img/avatars/avatar${index + 1}.jpg" class="mil-avatar"/>
                  </div>`;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      effect: 'fade'
    });
  }
  
}
