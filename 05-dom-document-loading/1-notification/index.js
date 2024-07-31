export default class NotificationMessage {
  static hasMessage;

  constructor(message,
    {
      duration = 1000,
      type = 'success',
    } = {}) {
    if (NotificationMessage.hasMessage) {
      NotificationMessage.hasMessage.remove();
    }

    this.message = message;
    this.duration = duration;
    this.type = type;

    const element = document.createElement('div');
    element.innerHTML = this.createTemplate();

    this.element = element.firstElementChild;
    NotificationMessage.activeNotification = this.element;
  }

  createTemplate() {
    return `<div class="notification ${this.type}" style="--value:${this.duration / 1000}s">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">success</div>
        <div class="notification-body">
          ${this.message}
        </div>
      </div>
    </div>`;
  }

  show(parent = document.body) {
    parent.append(this.element);    

    setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
    NotificationMessage.hasMessage = null;
  }
}


