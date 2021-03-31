import { DateTime } from 'luxon';
import { Subscribe } from '../pub-sub';
import { ListItem } from '../components/list-item';
import { NotificationType } from '../types';
import Storage from '../utils/local-storage-worker';

enum Locals {
  NOTIFICATIONS = 'NOTIFICATIONS',
}

export default class NotificationCenter extends Storage<Locals> {
  selector: HTMLElement;
  notifications: NotificationType[];
  token: any;

  constructor(selector: HTMLElement) {
    super();
    this.token = this.getLocalNotifications();
    this.selector = selector;
    this.notifications = JSON.parse(this.token);

    if (!this.notifications) {
      this.notifications = [];
    }

    this.set(Locals.NOTIFICATIONS, JSON.stringify(this.notifications));
    // if (this.getAccessToken()) {
    //   const token: any = this.getAccessToken();
    //   const parsed = JSON.parse(token);
    //   console.log(parsed, 'parsed');

    //   // this.notifications.push(parsed);
    // }
    // this.notifications.push({ title: 'Title', isViewed: false });
    this.init();
  }

  init() {
    Subscribe(this.selector, this.addNotification.bind(this));
    // this.loadNotifications();
  }

  addNotification(notification: NotificationType) {
    const { title } = notification;
    const newNotification = {
      title,
      isViewed: false,
      date: DateTime.now().toRelative({ unit: 'seconds' }),
    };

    this.notifications.push(newNotification);
    this.set(Locals.NOTIFICATIONS, JSON.stringify(this.notifications));
    this.loadNotifications();
  }

  public getLocalNotifications() {
    return this.get(Locals.NOTIFICATIONS);
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
    // this.clearItem(Locals.NOTIFICATIONS);
    // this.set(Locals.NOTIFICATIONS, JSON.stringify(this.notifications));

    this.selector.innerHTML = '';
    this.notifications.forEach((notification, index) => {
      this.selector.appendChild(ListItem(notification, index));
    });
  }

  getNotifications() {
    return this.notifications.length;
  }
}
