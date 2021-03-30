import { NotificationType } from '../../types';

const labelTemplate = (title: string, isViewed: boolean, index: number) =>
  `
    <div>${title}</div>
    <div>${isViewed}</div>
    <div>${index}</div>
    <button class="delete-button">Delete ${index}</button>
  `;

export default (notification: NotificationType, index: number) => {
  const { title, isViewed } = notification;
  const template = document.createElement('div');
  // template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  // template.classList.add(validateEmail(props.email) ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate(title, isViewed, index);

  // remove email label on click
  template?.querySelector('.delete-button')?.addEventListener('click', () => {
    console.log('clicked');
  });

  console.log(template);

  return template;
};
