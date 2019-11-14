export default function eraser() {
  const iconEraser = document.querySelector('.icon-tool-eraser');
  let iconEraserActive = false;

  iconEraser.addEventListener('click', () => {
    if (iconEraserActive === false) {
      iconEraserActive = true;
      iconEraser.style.backgroundColor = 'red';
    } else {
      iconEraserActive = false;
      iconEraser.style.backgroundColor = '#444';
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
    if (iconEraserActive === true) {
      if (!userDrawOnCanvas) return;
      const { width: canvasWidth } = canvas;
      const pixelWidth = 512 / canvasWidth;
      const penX = Math.floor(e.offsetX / pixelWidth);
      const penY = Math.floor(e.offsetY / pixelWidth);
      context.clearRect(penX, penY, 1, 1);
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
