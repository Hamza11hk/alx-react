import './styles.css';
import logo from './logo.png';

function component() {
  const element = document.createElement('div');

  // Add some content to the element
  element.innerHTML = 'Hello, Webpack!';

  // Add an image to the element
  const img = new Image();
  img.src = logo;
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
