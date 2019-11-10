const btn = document.querySelector('.btn');
const inputField = document.querySelector('#inputField');
const inbox = document.querySelector('.inbox_list');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputField.value !== '') {
    const inboxItem = document.createElement('li');
    inboxItem.classList.add('inbox_list-item');

    inboxItem.innerHTML = `${inputField.value}
                <i class="far fa-trash-alt"></i>`;
    inbox.append(inboxItem);
    inputField.value = '';
  }
});


inbox.addEventListener('click', (e) => {
  const { target } = e;
  if (target.nodeName === 'I') {
    target.parentElement.remove();
  }
});
