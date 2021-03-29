import { Subscribe } from '../pub-sub';
const actId: string[] = [];

export default async (selector: HTMLElement) => {
  const response = await fetch('http://goodup-demo.localhost:4200/api/hooks/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 502) {
    await Subscribe(selector);
  } else if (response.ok) {
    const json = await response.json();

    if (!actId.includes(json.data.id)) {
      actId.push(json.data.id);
      const message = json.included[0].attributes;

      showMessage(message.title, selector);
    }

    setTimeout(() => {
      // Subscribe(selector);
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
