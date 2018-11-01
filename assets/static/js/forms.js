(() => {

// Ожидатся одна форма на странице.
const form = document.querySelector('form');

return form ? form.addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;

  const method = form.getAttribute('method');
  const url = form.getAttribute('action');
  const asyn = true;

  if (!method && !url) return;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url, asyn);

  const formData = new FormData(form);

  xhr.send(formData);

  xhr.onreadystatechange = () => { 
    if (xhr.readyState != 4) 
      return;
  }
}) : false;

})();