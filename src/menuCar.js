import { datasheet,infoProduct } from './datasheet.js';
const bag = JSON.parse(localStorage.getItem('bag'));

function openBagProduct() {
  document.getElementById('bag').classList.remove('closeBag');
  document.getElementById('bag').classList.add('openBag');
  document.getElementById('listOptions').classList.add('none');
}

function closeBagProduct() {
  document.getElementById('bag').classList.remove('openBag');
  document.getElementById('bag').classList.add('closeBag');
  document.getElementById('listOptions').classList.remove('none');
}

export function initializeBag() {
  const bagClose = document.getElementById('close-bag');
  const bagOpen = document.getElementById('open-bag');

  bagClose.addEventListener('click', closeBagProduct);
  bagOpen.addEventListener('click', openBagProduct);

  getProductInBag();
  updateBag();
}

function getProductInBag() {
  const productBag = JSON.parse(localStorage.getItem(`bag`));
  const containerBag = document.getElementById('container-products-bag');
  containerBag.innerHTML = '';

  for (var item of productBag) {
    const cardProductBag = `<div id="item-${item.id}" class="product-bag">
    <img id=${item.id} class="img-car" alt="" src="assets/img/${item.nameFileImg1}">
    <div class="description-bag">
    <div id="name-${item.id}">${item.name} - ${item.brand}</div>
          <div class="flex">
            <div class="blockQtdProduct">
             <button id="btnDecrement-${item.id}" class="btnQtd btnDecrement">-</button>
                <div id="qtd-${item.id}">1</div>
              <button id="btnIncrement-${item.id}" class="btnQtd btnIncrement">+</button>
              </div>
            unidades 
          </div>
          <div class="price" id="price-${item.id}">$${item.price}
          </div>
        </div>
      <div>
        <button>
        <span id="btnDelete-${item.id}" class="material-icons-round btnDelete">
            delete_forever
          </span>
        </button>
        </div>
        </div>`;
    containerBag.innerHTML += cardProductBag;
  }
  addEventClick();
}

export function addInBag(idProduct) {
  const product = datasheet.find((p) => p.id === idProduct);
  var productBag = JSON.parse(localStorage.getItem(`bag`));
  var findInBag = productBag.find((p) => p.id === idProduct);

  if (findInBag !== undefined) {
    alert('o elemento existe dentro da div');
  } else {
    bag.push(product);
    localStorage.setItem(`bag`, JSON.stringify(bag));
    getProductInBag();
    updateBag();
  }
}

export function addEventClick() {
  const buttonsDecrement = document.getElementsByClassName('btnDecrement');
  for (var x of buttonsDecrement) {
    let itemDec = x;
    itemDec.addEventListener('click', (event) => decrement(event));
  }
  const buttonsIncrement = document.getElementsByClassName('btnIncrement');
  for (var x of buttonsIncrement) {
    let itemInc = x;
    itemInc.addEventListener('click', (event) => increment(event));
  }
  const buttonsDelete = document.getElementsByClassName('btnDelete');
  for (var x of buttonsDelete) {
    let itemDelete = x;
    itemDelete.addEventListener('click', (event) => deleteItem(event));
  }
  const btnImg = document.getElementsByClassName('img-car');
  for(var x of btnImg){
    let btImg = x;
    btImg.addEventListener('click',(event)=> infoProduct(event))
  }
}

function decrement(event) {
  const idItem = event.target.id;
  const numIdItem = idItem.substring(idItem.indexOf('-') + 1);
  const qtdItem = document.getElementById(`qtd-${numIdItem}`);

  if (qtdItem.innerText > 1) {
    qtdItem.innerText--;
  } else {
    alert('Quantidade não pode ser menor que 1');
  }
  updateBag();
}
function increment(event) {
  const idItem = event.target.id;
  const numIdItem = idItem.substring(idItem.indexOf('-') + 1);

  const qtdItem = document.getElementById(`qtd-${numIdItem}`);
  qtdItem.innerText++;
  updateBag();
}

export function deleteItem(event) {
  const idItem = event.target.id;
  const numIdItem = idItem.substring(idItem.indexOf('-') + 1);
  const itemIndex = bag.findIndex((p) => p.id == numIdItem);
  bag.splice(itemIndex, 1);
  localStorage.setItem('bag', JSON.stringify(bag));
  getProductInBag();
  updateBag();
}

export function updateBag() {
  let totalValue = document.getElementById('valueTotalBag');
  let productsBag = document.getElementsByClassName('product-bag');
  let bagNotification = document.getElementById('bagNotification');

  let totalBag = 0;
  let totalProduct = 0;
  bagNotification.innerText = productsBag.length;

  for (var x of productsBag) {
    let productId = x.id;
    let numIdItem = productId.substring(productId.indexOf('-') + 1);

    let qtdItem = Number(document.getElementById(`qtd-${numIdItem}`).innerText);
    let valueProduct = Number(
      document.getElementById(`price-${numIdItem}`).innerText.substring(1)
    );

    totalProduct = qtdItem * valueProduct;
    totalBag += totalProduct;
  }
  totalValue.innerHTML = totalBag.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'USD',
  });
}
