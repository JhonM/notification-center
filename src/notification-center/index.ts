import { Subscribe } from '../pub-sub';
import { ListItem } from '../components/list-item';
import { NotificationType } from '../types';

export default class NotificationCenter {
  selector: HTMLElement;
  notifications: NotificationType[];

  constructor(selector: HTMLElement) {
    this.selector = selector;
    this.notifications = [];

    // this.notifications.push({ title: 'Title', isViewed: false });
    this.init();
  }

  init() {
    Subscribe(this.selector, this.addNotification.bind(this));
    this.loadNotifications();
  }

  addNotification(notification: NotificationType) {
    const { title } = notification;
    const newNotification = {
      title,
      isViewed: false,
    };

    console.log(this.notifications, 'add notification');
    this.notifications.push(newNotification);
    console.log(this.notifications, 'add notification');
    this.loadNotifications();
  }

  deleteNotification(event: any, index: number) {
    console.log('remove.s...');
    event.preventDefault();
    // this.notifications.splice(index, 1);
    // const n = localStorage.removeItem('NOTIFICATIONS');
    // console.log(`removes ${n}`);
    // this.loadNotifications();
  }

  loadNotifications() {
    localStorage.setItem('NOTIFICATIONS', JSON.stringify(this.notifications));

    this.selector.innerHTML = '';
    const notificationHTML = this.notifications.forEach((notification, index) => {
      this.selector.appendChild(ListItem(notification, index));
    });

    console.log(notificationHTML);
  }
}
