import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Yosser',

      avatar: '../../../../../assets/img/faces/face6.jpg',
      text: 'Un médecin très professionnel, très attentionné et connaît très bien son métier, avec un bon suivi des patients'
    },
    {
      name: 'Faiza',

      avatar: '../../../../../assets/img/faces/face7.jpg',
      text: 'Plus de cinq ans douce, ravissante, généreuse docteure 😍in sha Allah a Vie avec vous merci beaucoup'
    },
    {
      name: 'Mohamed B',

      avatar: '../../../../../assets/img/faces/face4.jpg',
      text: 'Le dentiste Rabeb Hraimi m’a fait des contentions dentaires mnt j’ai des dents magnifiques je l’ai connu grâce à une amie en France qui avait elle même fait des implants dentaires avec le Dr donc merci pour tout merci pour les belles dents que j’ai mnt un petit coucou de Lyon'
    },
    {
      name: 'Saif M',

      avatar: '../../../../../assets/img/faces/face5.jpg',
      text: 'Une chirurgienne dentiste dévouée et passionnée par son travail. Je la recommande vivement.'
    }
  ];

  selectedReviewIndex = 0;

  selectReview(index: number) {
    this.selectedReviewIndex = index;
  }

  nextReview() {
    this.selectedReviewIndex = 
      (this.selectedReviewIndex + 1) % this.reviews.length;
  }

  prevReview() {
    this.selectedReviewIndex = 
      (this.selectedReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
