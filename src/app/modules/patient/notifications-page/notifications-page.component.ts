import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css']
})
export class NotificationsPageComponent implements OnInit {
  notifications: any[] = [];
  userId = JSON.parse(localStorage.getItem('user') || '{}').id;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.http.get<any[]>(`http://localhost:3000/api/notifications/${this.userId}`)
      .subscribe(data => this.notifications = data);
  }

  markAsRead(id: string) {
    this.http.put(`http://localhost:3000/api/notifications/read/${id}`, {})
      .subscribe(() => this.loadNotifications());
  }

  deleteNotification(id: string) {
    this.http.delete(`http://localhost:3000/api/notifications/${id}`)
      .subscribe(() => this.loadNotifications());
  }
}
