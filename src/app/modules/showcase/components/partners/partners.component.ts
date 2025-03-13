import { AfterViewInit, Component } from '@angular/core';
import { Swiper } from 'swiper';
import { Autoplay, Pagination ,Navigation } from 'swiper/modules';  // ✅ Correct pour v11+

Swiper.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],  // ❌ Supprimer `SwiperModule`, ce n'est plus nécessaire
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
}
