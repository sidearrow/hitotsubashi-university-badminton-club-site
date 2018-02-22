export const clickTab = function (event, panels) {
  if (event.target.classList.contains('mdc-tab--active')) {
    return;
  }

  const pos = event.target.getAttribute('data-tab');
  panels.querySelector('.panel.active').classList.remove('active');
  panels.querySelector(`.panel[data-tab="${pos}"]`).classList.add('active');
}