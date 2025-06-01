// src/app/services/notification.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private apiUrl = 'http://localhost:3000/api/notifications';

  constructor(private http: HttpClient) {}

  getNotifications(userId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  markAsRead(notificationId: string) {
    return this.http.put(`${this.apiUrl}/read/${notificationId}`, {});
  }

  delete(notificationId: string) {
    return this.http.delete(`${this.apiUrl}/${notificationId}`);
  }
}
