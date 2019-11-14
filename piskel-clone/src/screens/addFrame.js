export default function addFrame() {
  const addFrameButton = document.querySelector('#add_frame');
  const frames = document.querySelector('.frames');
  const elems = frames.getElementsByTagName('*');
  const clearImage = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVRYR+3QQREAAAABQfqXFsNnFTizzXk99+MAAQIECBAgQIAAAQIECBAgMBo/ACHo7lH9AAAAAElFTkSuQmCC';
  localStorage.setItem('clearImage', clearImage);
  const dataImage = localStorage.getItem('clearImage');

  const canvas = document.querySelector('.canvas-container');
  const context = canvas.getContext('2d');

  canvas.width = 32;
  canvas.height = 32;

  addFrameButton.addEventListener('click', () => {
    context.clearRect(0, 0, 32, 32);
    for (let i = 0; i < elems.length; i += 1) {
      if (elems[i].style.border === '3px solid red') {
        elems[i].style.border = '1px solid #000000';
        elems[i].classList.remove('change');
        elems[i].classList.add('noChange');
      }
      if (elems[i].dataset.active === 'no-active') {
        elems[i].dataset.active = 'active';
        elems[i].style.display = 'block';
        elems[i].style.border = '3px solid red';
        elems[i].classList.add('change');
        elems[i].src = `data:image/png;base64,${dataImage}`;
        return;
      }
    }
  });

  frames.addEventListener('click', (e) => {
    if (e.target.className === 'noChange') {
      for (let i = 0; i < elems.length; i += 1) {
        elems[i].classList.remove('change');
        elems[i].classList.add('noChange');
        elems[i].style.border = '1px solid #000000';
      }
    }
    e.target.classList.remove('noChange');
    e.target.classList.add('change');
    e.target.style.border = '3px solid red';
    const dataImageLocal = localStorage.getItem(e.target.id);
    e.target.src = `data:image/png;base64,${dataImageLocal}`;
    context.clearRect(0, 0, 32, 32);
    context.drawImage(e.target, 0, 0);
  });
}
