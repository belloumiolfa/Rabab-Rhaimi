import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  ApexTheme
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  colors: string[];
  fill: ApexFill;     // ✅ sans ?
  theme: ApexTheme;   // ✅ sans ?
};




@Component({
  selector: 'app-secretary-stats',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './secretary-stats.component.html',
  styleUrls: ['./secretary-stats.component.css']
})
export class SecretaryStatsComponent implements OnInit {
  stats = {
    totalPatients: 0,
    totalRendezVous: 0,
    totalDisponibilites: 0,
    totalAnnulations: 0,
    totalUrgences: 0
  };
userName: string = '';

chartOptions: ChartOptions = {
  series: [],
  chart: {
    type: 'donut',
    width: 400
  },
  labels: [],
  responsive: [],
  legend: {
    position: 'right',
    fontSize: '12px',
    labels: {
      colors: ['#333']
    }
  },
  colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'], // temporaire
  fill: {
    colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'] // temporaire
  },
  theme: {
    palette: 'palette1',
    monochrome: {
      enabled: false
    }
  }
};



  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    this.userName = `${user.firstname ?? ''} ${user.name ?? ''}`;
  }
    this.http.get<any>('http://localhost:3000/api/stats/secretary').subscribe({
      next: (data) => {
        this.stats = data;

        this.chartOptions = {
          series: [
            data.totalPatients,
            data.totalRendezVous,
            data.totalDisponibilites,
            data.totalAnnulations,
            data.totalUrgences
          ],
          chart: {
            type: 'donut',
            width: 420
          },
          labels: ['Patients', 'Rendez-vous', 'Disponibilités', 'Annulations', 'Urgences'],
          colors: [
            '#A7C7E7', // Patients (bleu pastel)
            '#B4E7B0', // Rendez-vous (vert pastel)
            '#A0E7E5', // Disponibilités (turquoise pastel)
            '#FFF5BA', // Annulations (jaune pastel)
            '#FFB5C5'  // Urgences (rose pastel)
          ],
          fill: {
            colors: [
              '#A7C7E7',
              '#B4E7B0',
              '#A0E7E5',
              '#FFF5BA',
              '#FFB5C5'
            ]
          },
          legend: {
            position: 'right',
            fontSize: '14px',
            labels: {
              useSeriesColors: true
            }
          },
          theme: {
            palette: 'palette1', // 👈 Apex force les couleurs ici sinon
            monochrome: {
              enabled: false // 👈 important pour désactiver le mode monochrome
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: { width: 320 },
                legend: { position: 'bottom' }
              }
            }
          ]
        };

      },
      error: () => {
        console.error('  Erreur lors du chargement des statistiques');
      }
    });
  }
}
