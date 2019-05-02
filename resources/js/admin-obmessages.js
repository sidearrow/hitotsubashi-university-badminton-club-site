const modalInputId = document.querySelector('#deleteModal input[name=id]');

document.querySelectorAll('.button-delete').forEach((el) => {
  el.addEventListener('click', (event) => {
    modalInputId.value = event.target.getAttribute('data-id');
  });
});
