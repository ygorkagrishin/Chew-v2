document.querySelector('.nav > button[data-open]').addEventListener('click', function (e) {
  e.preventDefault();

  const TOGGLE = this;

  const DATA_VALUE = TOGGLE.hasAttribute('data-target') ? 
  TOGGLE.getAttribute('data-target') : false;

  const TARGET = document.querySelector(DATA_VALUE);

  if (!TARGET) return false;

  if (TARGET.classList.contains('collapse')) {
    TARGET.classList.remove('collapse');
  };

});

document.querySelector('.nav > button[data-close]').addEventListener('click', function (e) {
  const TOGGLE = this;

  const DATA_VALUE = TOGGLE.hasAttribute('data-target') ? 
  TOGGLE.getAttribute('data-target') : false;

  const TARGET = document.querySelector(DATA_VALUE);

  if (!TARGET) return false;

  if (!TARGET.classList.contains('collapse')) {
    TARGET.classList.add('collapse');
  };
});