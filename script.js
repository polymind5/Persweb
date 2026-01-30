const trigger = document.getElementById('center-trigger');
const canvas = document.querySelector('.canvas');

let active = false;

trigger.addEventListener('click', () => {
  active = !active;
  canvas.classList.toggle('active', active);
});
