import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-rdv',
  standalone: true,
  templateUrl: './confirmation-rdv.component.html',
  imports: [CommonModule],
})
export class ConfirmationRdvComponent implements OnInit {
  appointmentId: string = '';
  success: boolean | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.appointmentId = this.route.snapshot.paramMap.get('id') || '';
    const localDateParam = this.route.snapshot.queryParamMap.get('date'); // 👈
  
    if (this.appointmentId && localDateParam) {
      const utcISOString = new Date(localDateParam).toISOString();

  
      console.log('🕒 Date UTC à enregistrer :', utcISOString);
  
      this.http.put(`http://localhost:3000/api/appointments/confirm-date/${this.appointmentId}`, {
        date_time: utcISOString
      }).subscribe({
        next: () => this.success = true,
        error: () => this.success = false
      });
    } else {
      this.success = false;
    }
  }
  
  
}
