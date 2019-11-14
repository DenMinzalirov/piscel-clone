export default function del() {
  const framess = document.querySelector('.frames');
  const delButton = document.querySelector('#delete_frame');

  function delFrame(e) {
    e.target.remove();
    delButton.style.backgroundColor = '';
    framess.removeEventListener('click', delFrame);
  }

  function activeDelButton() {
    delButton.style.backgroundColor = 'red';
    framess.addEventListener('click', delFrame);
  }

  delButton.addEventListener('click', activeDelButton);
}
