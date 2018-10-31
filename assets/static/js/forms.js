// Ожидается одна форма на странице
document.querySelector('form').addEventListener('submit', function (e) {
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
});