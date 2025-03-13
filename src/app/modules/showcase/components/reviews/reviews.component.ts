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
      name: 'Sarah Newman',
      position: 'Envato Market',
      avatar: 'assets/img/avatars/avatar1.jpg',
      text: 'This creative agency stands out with their exceptional talent and expertise...'
    },
    {
      name: 'Emma Trueman',
      position: 'Envato Market',
      avatar: 'assets/img/avatars/avatar2.jpg',
      text: 'I had the pleasure of working with this creative agency...'
    },
    {
      name: 'John Doe',
      position: 'Envato Market',
      avatar: 'assets/img/avatars/avatar3.jpg',
      text: 'An amazing creative agency to work with!'
    },
    {
      name: 'Jane Smith',
      position: 'Envato Market',
      avatar: 'assets/img/avatars/avatar4.jpg',
      text: 'Their dedication to detail and creative vision is unmatched...'
    },
    {
      name: 'Michael Brown',
      position: 'Envato Market',
      avatar: 'assets/img/avatars/avatar5.jpg',
      text: 'The designs they produce are visually captivating and impactful...'
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
