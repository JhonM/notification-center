import { Subscribe } from '../pub-sub';
import { NotificationType } from '../types';

const actId: string[] = [];

export default async (selector: HTMLElement, action: (notification: NotificationType) => void) => {
  const response = await fetch('http://goodup-demo.localhost:4200/api/hooks/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log('sub...');
  if (response.status === 502) {
    await Subscribe(selector, action);
  } else if (response.ok) {
    const json = await response.json();

    if (!actId.includes(json.data.id)) {
      actId.push(json.data.id);
      const message = json.included[0].attributes;

      console.log(message, 'sub... inside');
      action(message);
      // showMessage(message.title, selector);
    }

    setTimeout(() => {
      Subscribe(selector, action);
    }, 1000);
  }
};

/**
 * @param message
 * @param selector
 */
function showMessage(message: HTMLElement, selector: HTMLElement) {
  const messageElem = document.createElement('div');
  messageElem.append(message);
  selector.append(messageElem);
}
