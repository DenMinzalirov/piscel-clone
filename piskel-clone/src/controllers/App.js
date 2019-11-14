import render from '../views/AppView';
import penTool from '../models/PenTool';
import pickr from '../models/colorPicker/colorPicker';
import paintBucket from '../models/PaintBucket';
import eraser from '../models/Eraser';
import frame from '../screens/frame';
import addFrame from '../screens/addFrame';
import previev from '../screens/previev';
import del from '../screens/delFrame';

// const GIF = require('gif.js.optimized');

// const fabric = require('fabric');
// const _ = require('lodash');

// console.log(_.isEqual(1, 2));

export default function startApp() {
  render();
  penTool();
  pickr();
  paintBucket();
  eraser();
  frame();
  addFrame();
  previev();
  del();

  // console.log(GIF);

  // const gifEl = new GIF({
  //   workers: 2,
  //   quality: 10,
  // });

  // add an image element
  // const imageElement = 'https://www.piskelapp.com/p/img/icons.png?20181125';
  // gifEl.addFrame(imageElement);
  // console.log(gifEl);
  // const canvas = new fabric.fabric.StaticCanvas('canvas-container');
  // // canvas.height(400);
  // canvas.selection = false;

  // const rect = new fabric.fabric.Rect({
  //   left: 0,
  //   top: 0,
  //   fill: 'red',
  //   width: 20,
  //   height: 20,
  // });
  // canvas.add(rect);
  // console.log(canvas.height);
  // const canvasContainer = document.getElementById('canvas-container');
  // console.log(canvasContainer);
  // const canvas = new fabric.Canvas(canvasContainer);
  // console.log(canvas);
}
