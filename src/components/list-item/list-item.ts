import { NotificationType } from '../../types';

const labelTemplate = (title: string, isViewed: boolean, index: number, date: string | null) =>
  `
    <div class="notification-left">
        <div class="read-indication">
            <div class="${isViewed ? 'circle-open' : 'circle-close'}"></div>
        </div>

        <div class="list-info">
            <div class="notification-type">New applicant!</div>
            <div class="notification-description">Marcus Solomon has applied to '${title}'.</div>
            <div class="notification-stamp">${date}</div>
        </div>
    </div>
    <div class="notification-right">
        <a href="javaScript:void(0)" class="notification-action">
          Action
        </a>
    </div>
  `;

export default (notification: NotificationType, index: number) => {
  const { title, isViewed, date } = notification;
  const template = document.createElement('li');
  template.classList.add('notification-item');
  template.tabIndex = 0;
  template.innerHTML = labelTemplate(title, isViewed, index, date);

  template?.querySelector('.notification-action')?.addEventListener('click', () => {
    console.log('clicked');
  });

  return template;
};
