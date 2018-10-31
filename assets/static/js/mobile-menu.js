document.querySelector('.nav > button[data-open]').addEventListener('click', function (e) {
  e.preventDefault();

  const trigger = this;

  const dataValue = trigger.hasAttribute('data-target') ?
  trigger.getAttribute('data-target') : false;

  const target = document.querySelector(dataValue);

  if (!target) return;

  if (target.classList.contains('collapse')) {
    document.body.classList.add('mobile-menu-active');
    return target.classList.remove('collapse');
  };
});

document.querySelector('.nav > button[data-close]').addEventListener('click', function (e) {
  e.preventDefault();

  const trigger = this;

  const dataValue = trigger.hasAttribute('data-target') ? 
  trigger.getAttribute('data-target') : false;

  const target = document.querySelector(dataValue);

  if (!target) return;

  if (!target.classList.contains('collapse')) {
    document.body.classList.remove('mobile-menu-active');
    return target.classList.add('collapse');
  };
});

document.querySelector('#navbar').addEventListener('touchmove', function (e) {
  if (!this.classList.contains('collapse')) {
    return e.preventDefault();
  };
});