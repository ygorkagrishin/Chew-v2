document.querySelector('.nav > button[data-open]').addEventListener('click', function (e) {
  e.preventDefault();

  const trigger = this;

  const dataValue = trigger.hasAttribute('data-target') ?
  trigger.getAttribute('data-target') : false;
  
  let target = document.querySelector(dataValue);

  if (!target) return;

  let id = target.getAttribute('id');

  return new TimelineMax()
    .call(() => {
        if (target.classList.contains('collapse')) {
          document.querySelector('.scroll-content')
            .classList.add('mobile-menu-active');
          target.classList.remove('collapse');
        }
      }
    )  
    .fromTo(`#${id}`, .7, {opacity: 0}, {opacity: 1})
    .staggerFromTo(`#${id} a`, .3, {opacity: 0}, {opacity: 1}, .3)
    .fromTo(`#${id} + button[data-close]`, .7, {opacity: 0}, {opacity: 1})
});

document.querySelector('.nav > button[data-close]').addEventListener('click', function (e) {
  e.preventDefault();

  const trigger = this;

  const dataValue = trigger.hasAttribute('data-target') ? 
  trigger.getAttribute('data-target') : false;

  let target = document.querySelector(dataValue);

  if (!target) return;

  let id = target.getAttribute('id');

  return new TimelineMax()
    .fromTo(`#${id} + button[data-close]`, .7, {opacity: 1}, {opacity: 0})
    .staggerFromTo(`#${id} a`, .3, {opacity: 1}, {opacity: 0}, .3)
    .fromTo(`#${id}`, .7, {opacity: 1}, {opacity: 0})
    .call(() => {
        if (!target.classList.contains('collapse')) {
          document.querySelector('.scroll-content')
            .classList.remove('mobile-menu-active');
          target.classList.add('collapse');
        }
      }
    )
});

document.querySelector('#navbar').addEventListener('touchmove', function (e) {
  if (!this.classList.contains('collapse')) {
    return e.preventDefault();
  };
});