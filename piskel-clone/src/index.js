import startApp from './controllers/App';

const body = document.querySelector('body');
const hello = document.createElement('div');
hello.id = 'hello';

hello.insertAdjacentHTML(
  'afterbegin',
  `
    <div>Piskel-clone Author: Denis Minzakirov</div>
    <a id="git" href="https://github.com/DenMinzalirov">My Github</a>
    <button id="start">Start</button>
    <div id="img_start"></div>

  `,
);

body.appendChild(hello);

const start = document.querySelector('#start');

function startHello() {
  hello.remove();
  startApp();
}
start.addEventListener('click', startHello);

// <img id="img_start" src="../src/img/piskel-clone.jpg" alt="piskel-clone.jpg"></img>
