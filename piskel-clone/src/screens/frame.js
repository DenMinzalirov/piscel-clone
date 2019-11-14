const GIF = require('gif.js.optimized');

export default function frames() {
  const canvas = document.querySelector('.canvas-container');
  const animation = document.querySelector('#animation');
  const framess = document.querySelector('.frames');
  const elems = framess.getElementsByTagName('*');

  animation.width = 32;
  animation.height = 32;

  canvas.addEventListener('mouseup', () => {
    const exp = document.querySelector('#exp');
    function exportGif() {
      if (!elems.length) {
        return;
      }
      const gif = new GIF({
        workers: 2,
        quality: 10,
        repeat: 0,
      });

      for (let i = 0; i < elems.length; i += 1) {
        gif.addFrame(elems[i]);
      }

      const a = document.getElementById('a');
      a.style.display = 'block';

      gif.on('finished', (blob) => {
        a.href = URL.createObjectURL(blob);
      });

      gif.render();
      a.download = 'piskel-clone';
    }
    exp.addEventListener('click', exportGif);
    for (let i = 0; i < elems.length; i += 1) {
      if (elems[i].className === 'change') {
        const frameItem = document.getElementById(elems[i].id);
        frameItem.dataset.active = 'active';
        const url = canvas.toDataURL('image/png');
        const b64image = url.replace(/^data:image\/(png|jpg);base64,/, '');
        localStorage.setItem(frameItem.id, b64image);
        const dataImage = localStorage.getItem(frameItem.id);
        frameItem.src = `data:image/png;base64,${dataImage}`;
      }
    }
  });
}
