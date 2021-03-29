import { Subscribe } from '../pub-sub';

export default class NotificationCenter {
  selector: HTMLElement;

  constructor(selector: HTMLElement) {
    this.selector = selector;

    Subscribe(selector);
  }
}
