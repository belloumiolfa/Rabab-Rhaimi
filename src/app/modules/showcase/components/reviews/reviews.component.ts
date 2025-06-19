import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
function capitalizeFirstLetter(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

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

      avatar: '../../../../../assets/img/faces/temoignage/Yosser.png',
      text: 'Un médecin très professionnel, très attentionné et connaît très bien son métier, avec un bon suivi des patients'
    },
    {
      name: 'Faiza',

      avatar: '../../../../../assets/img/faces/temoignage/Faiza.png',
      text: 'Plus de cinq ans douce, ravissante, généreuse docteure 😍in sha Allah a Vie avec vous merci beaucoup'
    },
    {
      name: 'Mohamed B',

      avatar: '../../../../../assets/img/faces/temoignage/Mohamed B.png',
      text: 'Le dentiste Rabab Hraimi m’a fait des contentions dentaires mnt j’ai des dents magnifiques je l’ai connu grâce à une amie en France qui avait elle même fait des implants dentaires avec le Dr donc merci pour tout merci pour les belles dents que j’ai mnt un petit coucou de Lyon'
    },
    {
      name: 'Saif M',

      avatar: '../../../../../assets/img/faces/temoignage/Saif-M.png',
      text: 'Une chirurgienne dentiste dévouée et passionnée par son travail. Je la recommande vivement.'
    },
    {
      name: 'Amal',

      avatar: '../../../../../assets/img/faces/temoignage/Amal.png',
      text: "De la prise du rendez-vous jusqu'à la visite, lexpérience est plus que exceptionnelle. Le soucis du détail et le conseil d'abord rendent le client très convaincu de l'expertise. Tout ça avec un sourire angélique"
    },
    {
      name: 'Asma',

      avatar: '../../../../../assets/img/faces/temoignage/Asma.png',
      text: 'Je suis très satisfaite de mon expérience avec Dr Rabab. Elle est super gentille et très délicate. Je la recommande'
    },
    {
      name: 'Fares',

      avatar: '../../../../../assets/img/faces/temoignage/Fares.png',
      text: 'Médecin compétente et accueil chaleur ! Toujours à l’écoute du patient !'
    }
  ];

  selectedReviewIndex = 0;
 constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.loadApprovedTestimonials();
  }

//   loadApprovedTestimonials(): void {
// this.http.get<any[]>('http://localhost:3000/api/testimonial/status?status=approved').subscribe(
//     (data) => {
//       const formatted = data.map(item => ({
//         name: `${capitalizeFirstLetter(item.name)} ${capitalizeFirstLetter(item.firstname?.charAt(0)) ?? ''} `,
// avatar: item.profile_picture && item.profile_picture !== 'default-profile.jpg'
//   ? `http://localhost:3000/uploads/profile/${item.profile_picture}`
//   : `http://localhost:3000/uploads/defaults/default-profile.jpg`,

//         text: item.message
//       }));
//       this.reviews = [...this.reviews, ...formatted];
//     },
//     (err) => {
//       console.error('Erreur lors du chargement des témoignages approuvés', err);
//     }
//   );
// }


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
