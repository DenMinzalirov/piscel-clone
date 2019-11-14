export default function render() {
  const body = document.querySelector('body');
  const app = document.createElement('div');

  app.id = 'app';
  app.className = 'app';
  app.insertAdjacentHTML(
    'afterbegin',
    `
    <div class='tools'>tools
      <ul class="tools-container">
        <li class="tool-icon icon-tool-pen"></li>
        <li class="tool-icon icon-tool-paint-bucket"></li>
        <li class="tool-icon icon-tool-eraser"></li>
      </ul>
      <ul>
        <li>
          <div class="theme-container"></div>
          <div class="pickr-container">choose color</div>
        </li>
      </ul>
    </div>
    <div>frames
      <div class="frames" id="frames">
        <img id="frame1" data-active="active" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVRYR+3QQREAAAABQfqXFsNnFTizzXk99+MAAQIECBAgQIAAAQIECBAgMBo/ACHo7lH9AAAAAElFTkSuQmCC" style="display: block; border: 3px solid red;" class="change">
        <img id="frame2" data-active="no-active" src="">
        <img id="frame3" data-active="no-active" src="">
        <img id="frame4" data-active="no-active" src="">
        <img id="frame5" data-active="no-active" src="">
        <img id="frame6" data-active="no-active" src="">
        <img id="frame7" data-active="no-active" src="">
        <img id="frame8" data-active="no-active" src="">
        <img id="frame9" data-active="no-active" src="">
        <img id="frame10" data-active="no-active" src="">

      </div>
      <button id="add_frame">Add frame</button>
      <button id="delete_frame">Delete frame</button>
      <button id="exp">Export Gif</button>
      <a id='a' href="">download gif</a>
    </div>
    <div class='canvas'>
      <canvas width="100%" height="100%" style="border:1px solid #000000" class="canvas-container" id="canvas-container"></canvas>
    </div>
    <div class='animation'>previev
      <canvas id="animation" width="326" height="326"></canvas>
      <button id="fullScreen">Full Screen</button>
    </div>
    <div class='seting'>seting</div>
  `,
  );

  body.appendChild(app);
}
