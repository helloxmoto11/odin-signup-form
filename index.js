const root = document.querySelector('#root');

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';

const modal = document.createElement('div');

const img = document.createElement('img');
img.setAttribute("src", "img/unsplash-photo.jpg");

modal.appendChild(img);
mainContainer.appendChild(modal);
const formContainer = document.createElement('div');

root.appendChild(mainContainer);


