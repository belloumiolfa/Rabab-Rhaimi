import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../backend/services/notification.service';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from "../notifications/notifications.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, ],
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  notifications: any[] = [];
  unreadCount = 0;
  showPanel = false;
  
  toggleNotifications() {
    this.showPanel = !this.showPanel;
  }
  
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.notificationService.getNotifications(user.id).subscribe(data => {
      this.notifications = data;
      this.unreadCount = data.filter(n => !n.is_read).length;
    });
  }

  togglePanel() {
    this.showPanel = !this.showPanel;
  }

  markAsRead(notification: any) {
    if (!notification.is_read) {
      this.notificationService.markAsRead(notification.id).subscribe(() => {
        notification.is_read = true;
        this.unreadCount--;
      });
    }
  }
}
