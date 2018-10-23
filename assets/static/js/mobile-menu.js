document.querySelector('.nav > button[data-open]').addEventListener('click', function (e) {
  e.preventDefault();

  const TRIGGER = this;

  const DATA_VALUE = TRIGGER.hasAttribute('data-target') ?
  TRIGGER.getAttribute('data-target') : false;

  const TARGET = document.querySelector(DATA_VALUE);

  if (!TARGET) return;

  if (TARGET.classList.contains('collapse')) {
    document.body.classList.add('mobile-menu-active');
    return TARGET.classList.remove('collapse');
  };
});

document.querySelector('.nav > button[data-close]').addEventListener('click', function (e) {
  e.preventDefault();

  const TRIGGER = this;

  const DATA_VALUE = TRIGGER.hasAttribute('data-target') ? 
  TRIGGER.getAttribute('data-target') : false;

  const TARGET = document.querySelector(DATA_VALUE);

  if (!TARGET) return;

  if (!TARGET.classList.contains('collapse')) {
    document.body.classList.remove('mobile-menu-active');
    return TARGET.classList.add('collapse');
  };
});

document.querySelector('#navbar').addEventListener('touchmove', function (e) {
  if (!this.classList.contains('collapse')) {
    return e.preventDefault();
  };
});