export default function paintBucket() {
  const iconPaintBucket = document.querySelector('.icon-tool-paint-bucket');
  let iconPaintBucketActive = false;
  // eslint-disable-next-line no-unused-vars
  let userDrawOnCanvas = false;

  iconPaintBucket.addEventListener('click', () => {
    if (iconPaintBucketActive === false) {
      iconPaintBucketActive = true;
      iconPaintBucket.style.backgroundColor = 'red';
      userDrawOnCanvas = true;
    } else {
      iconPaintBucketActive = false;
      iconPaintBucket.style.backgroundColor = '#444';
      userDrawOnCanvas = false;
    }
  });

  const canvas = document.querySelector('.canvas-container');
  const context = canvas.getContext('2d');

  canvas.width = 32;
  canvas.height = 32;

  function draw() {
    if (iconPaintBucketActive === true) {
      const chooseColor = document.querySelector('.pcr-button');
      context.fillStyle = window.getComputedStyle(chooseColor, null).color;
      context.fillRect(0, 0, 32, 32);
      userDrawOnCanvas = false;
      iconPaintBucketActive = false;
      iconPaintBucket.style.backgroundColor = '#444';
    }
  }
  canvas.addEventListener('click', draw);
}
