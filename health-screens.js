(() => {
  const buttons = [...document.querySelectorAll('.screen-open')];
  const dialog = document.querySelector('.screen-dialog');
  const image = dialog.querySelector('.screen-dialog-image');
  let current = 0;
  let opener;
  function display(index) {
    current = (index + buttons.length) % buttons.length;
    const source = buttons[current].querySelector('img');
    image.src = source.getAttribute('src');
    image.alt = source.alt;
    dialog.querySelector('h2').textContent = buttons[current].closest('figure').querySelector('h4').textContent;
  }
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    opener = button;
    display(index);
    dialog.showModal();
    document.body.classList.add('screen-dialog-open');
  }));
  dialog.querySelector('.screen-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.screen-prev').addEventListener('click', () => display(current - 1));
  dialog.querySelector('.screen-next').addEventListener('click', () => display(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      display(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('screen-dialog-open');
    opener?.focus({ preventScroll: true });
  });
})();
