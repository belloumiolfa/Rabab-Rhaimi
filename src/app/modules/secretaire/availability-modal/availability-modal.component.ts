import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-availability-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './availability-modal.component.html',
  styleUrls: ['./availability-modal.component.css']
})
export class AvailabilityModalComponent implements OnInit {
  @Input() availability: any;
  @Output() updated = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  startDate: string = '';
  startTime: string = '';
  endTime: string = '';
  errorMessage = '';

  ngOnInit() {
    if (this.availability) {
      const [datePart, timePart] = this.availability.start_datetime.split('T');
      this.startDate = datePart;
      this.startTime = timePart.substring(0,5); // "HH:mm"

      const endTimePart = this.availability.end_datetime.split('T')[1];
      this.endTime = endTimePart.substring(0,5);
    }
  }

  save() {
    if (this.startTime >= this.endTime) {
      this.errorMessage = '⛔ L\'heure de fin doit être après l\'heure de début.';
      return;
    }

    const newStartDatetime = `${this.startDate}T${this.startTime}:00`;
    const newEndDatetime = `${this.startDate}T${this.endTime}:00`;

    console.log('✅ Nouvelle disponibilité modifiée :', { newStartDatetime, newEndDatetime });

    this.updated.emit({
      ...this.availability,
      start_datetime: newStartDatetime,
      end_datetime: newEndDatetime
    });
  }

  delete() {
    if (confirm('🛑 Confirmez-vous la suppression ?')) {
      this.deleted.emit(this.availability.id);
    }
  }
}
