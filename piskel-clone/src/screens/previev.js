export default function previev() {
  const animation = document.querySelector('#animation');
  const ctxAnimation = animation.getContext('2d');
  const canvas = document.querySelector('.canvas-container');
  const framess = document.querySelector('.frames');
  const elems = framess.getElementsByTagName('*');
  const fullScr = document.querySelector('#fullScreen');

  function fullScreen() {
    animation.requestFullscreen();
  }

  function drawPrev(elem) {
    ctxAnimation.clearRect(0, 0, 32, 32);
    ctxAnimation.drawImage(elem, 0, 0);
  }
  let frameArr = [];

  canvas.addEventListener('mouseup', () => {
    fullScr.addEventListener('click', fullScreen);
    frameArr = [];
    for (let i = 0; i < elems.length; i += 1) {
      if (elems[i].dataset.active === 'active') {
        frameArr.push(elems[i]);
      }
    }
    let count = frameArr.length;
    setInterval(() => {
      if (count === 0) {
        count = frameArr.length;
      }
      const frameArrEl = frameArr[count - 1];
      drawPrev(frameArrEl);
      count -= 1;
    }, 1000);
  });
}
