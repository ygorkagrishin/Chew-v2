(() => {

const form = document.querySelector('form'); // Ожидаем не более одной формы на странице

if (!form) return;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const currentForm = this;

  const formData = new FormData();

  for (let element of currentForm.querySelectorAll('input, textarea')) {
    formData.append(element.name, element.value);
  }

  // currentForm.querySelectorAll('input, textarea').forEach(element => {
  //   formData.append(element.name, element.value);
  // });

  const xhr = new XMLHttpRequest();

  const options = {
    method: currentForm.getAttribute('method'),
    url: currentForm.getAttribute('action'),
    asyn: true
  }

  if (!options.method && !options.url) return;

  xhr.open(options.method, options.url, options.asyn);

  xhr.onreadystatechange = () => {
    if (xhr.status !== 200) {
      console.log('Произошла ошибка: ' + xhr.statusText);
    } else {
      console.log('Заказ оформлен: ' + xhr.responseText);
      currentForm.reset();
    }
  }

  xhr.send(formData);

});

})();