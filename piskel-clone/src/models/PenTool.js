export default function penTool() {
  // colorPicker();
  const iconToolPen = document.querySelector('.icon-tool-pen');
  let iconToolPenActive = false;

  iconToolPen.addEventListener('click', () => {
    if (iconToolPenActive === false) {
      iconToolPenActive = true;
      iconToolPen.style.backgroundColor = 'red';
    } else {
      iconToolPenActive = false;
      iconToolPen.style.backgroundColor = '#444';
    }
  });

  const canvas = document.querySelector('.canvas-container');
  const context = canvas.getContext('2d');

  canvas.width = 32;
  canvas.height = 32;

  let userDrawOnCanvas = false;

  function finishedPositionLine() {
    userDrawOnCanvas = false;
  }

  function draw(e) {
    if (iconToolPenActive === true) {
      if (!userDrawOnCanvas) return;
      const { width: canvasWidth } = canvas;
      const pixelWidth = 512 / canvasWidth;
      const penX = Math.floor(e.offsetX / pixelWidth);
      const penY = Math.floor(e.offsetY / pixelWidth);
      const chooseColor = document.querySelector('.pcr-button');
      context.fillStyle = window.getComputedStyle(chooseColor, null).color;
      context.fillRect(penX, penY, 1, 1);
    }
  }

  function startPositionLine(e) {
    userDrawOnCanvas = true;
    draw(e);
  }

  canvas.addEventListener('mousedown', startPositionLine);
  canvas.addEventListener('mouseup', finishedPositionLine);
  canvas.addEventListener('mousemove', draw);
}
