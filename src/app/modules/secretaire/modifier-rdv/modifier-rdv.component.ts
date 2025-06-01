import { Component, Input, Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-rdv',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modifier-rdv.component.html',
  styleUrls: ['./modifier-rdv.component.css']
})
export class ModifierRdvComponent implements OnChanges{
  @Input() rdv: any;
  @Output() fermer = new EventEmitter<void>();
  @Output() majListe = new EventEmitter<void>();

  constructor(private http: HttpClient) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['rdv'] && this.rdv && this.rdv.date_time) {
      // Reformater la date pour type="datetime-local"
      this.rdv.date_time = this.convertDateTime(this.rdv.date_time);
    }
  }

  convertDateTime(dateStr: string): string {
    // Transformer '2025-04-30 15:00:00' en '2025-04-30T15:00'
    return dateStr.replace(' ', 'T').substring(0, 16);
  }
  enregistrer() {
    this.http.put(`http://localhost:3000/api/appointments/update/${this.rdv.id}`, {
      date_time: this.rdv.date_time,
      motif: this.rdv.motif,
      commentaire: this.rdv.commentaire  // ✅ si tu veux gérer ça
    }).subscribe(() => {
      this.majListe.emit();
      this.fermer.emit();
    });
  }
  

}
