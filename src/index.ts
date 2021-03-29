import './css/index.scss';
import NotificationCenter from './notification-center';

export const setup = (selector: HTMLElement) => new NotificationCenter(selector);
