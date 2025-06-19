import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.css']
})
export class OtherServiceComponent {
  experiences = [
    {
      title: 'Propriétaire de cabinet privé',
      institution: 'Cabinet personnel',
      location: 'Tunis',
      start_date: '2011-11-01',
      end_date: null
    },
    {
      title: 'Service d’orthopédie dento-faciale',
      institution: 'Clinique dentaire de Monastir',
      location: 'Monastir',
      start_date: '2010-06-01',
      end_date: '2010-09-30'
    },
    {
      title: 'Département de dentisterie',
      institution: 'Hôpital Charles Nicolle',
      location: 'Tunis',
      start_date: '2010-02-01',
      end_date: '2010-05-31'
    },
    {
      title: 'Service de chirurgie maxillo-faciale',
      institution: 'Hôpital Sahloul',
      location: 'Sousse',
      start_date: '2009-12-01',
      end_date: '2010-01-31'
    },
    {
      title: 'Service de dermatologie',
      institution: 'Hôpital Farhat Hached',
      location: 'Sousse',
      start_date: '2009-10-01',
      end_date: '2009-11-30'
    }
  ];

  formatDate(date: string | null): string {
    if (!date) return 'Présent';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', { month: '2-digit', year: 'numeric' });
  }
}
