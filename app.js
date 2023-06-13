const btns = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    cards.forEach((card) => {
      card.classList.remove('open');
      if (btn.dataset.id === card.getAttribute('id')) {
        card.classList.add('open');
      }
    });
    btns.forEach((btn) => {
      btn.classList.remove('open');
    });
    btn.classList.add('open');
  });
});
