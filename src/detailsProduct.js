import { addInBag } from './menuCar.js';
import { initializeBag,addEventClick } from './menuCar.js';

function getInfoProduct() {
  const imagMain = document.getElementById('imgMain');
  const description = document.getElementById('description');
  const imagPq1 = document.getElementById('imgPq1');
  const imagPq2 = document.getElementById('imgPq2');
  const imagPq3 = document.getElementById('imgPq3');
  const imagPq4 = document.getElementById('imgPq4');
  const nameDatails = document.getElementById('nameDatails');
  const priceDetails = document.getElementById('priceDetails');
  const payment = document.getElementById('payment');
  const addBag = document.getElementById('addBag');
  const product = JSON.parse(localStorage.getItem('infoProduct'));

  imagMain.src = `assets/img/${product.nameFileImg1}`;
  imagPq1.src = `assets/img/${product.nameFileImg2}`;
  imagPq2.src = `assets/img/${product.nameFileImg3}`;
  imagPq3.src = `assets/img/${product.nameFileImg4}`;
  imagPq4.src = `assets/img/${product.nameFileImg1}`;
  
  description.innerText = product.description;
  nameDatails.innerText = product.name;

  let priceReal = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  priceDetails.innerText = priceReal;
  payment.innerText = `Em 10x de ${(product.price / 10).toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    }
  )} sem juros`;
  addBag.addEventListener('click', () => addInBag(product.id));
}

const imgMain = document.getElementById('imgMain');
const imgHover = document.getElementsByClassName('imgPq');

for (let img of imgHover) {
  const imgHoverBt = img;
  imgHoverBt.addEventListener('mouseover', (event) => mouseMove(event));
}

function mouseMove(event) {
  const srcImg = event.target.src;
  imgMain.src = srcImg;
}
initializeBag();
getInfoProduct();
addEventClick();
