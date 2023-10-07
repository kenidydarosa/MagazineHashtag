import { addInBag } from './menuCar.js';

export const datasheet = [
  {
    id: 1,
    brand: 'Zara',
    name: 'Jaqueta denin limited edition',
    description: `Jaqueta de gola com lapela e manga comprida. Aplique de bolsos de patch com aba na 
    frente e na manga. Efeito de lavagem. Fecho frontal de botões ocultos por aba.`,
    price: 799.9,
    nameFileImg1: 'product-1-1.jpg',
    nameFileImg2: 'product-1-2.jpg',
    nameFileImg3: 'product-1-3.jpg',
    nameFileImg4: 'product-1-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 2,
    brand: 'Zara',
    name: 'Jaqueta biker de couro',
    description: `Jaqueta confeccionada em couro. Gola com lapelas com detalhe de botões de pressão.
    Manga comprida com acabamento em punho com zíper. Bolsos com zíper no peito e com aba na cintura. 
    Detalhe de bolso`,
    price: 1299,
    nameFileImg1: 'product-2-1.jpg',
    nameFileImg2: 'product-2-2.jpg',
    nameFileImg3: 'product-2-3.jpg',
    nameFileImg4: 'product-2-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 3,
    brand: 'Zara',
    name: 'Jaqueta bomber com remendo',
    description: `Jaqueta varsity confeccionada em tecido efeito camurça. Gola de abas e manga comprida. 
    Bolsos de dupla abertura debruada e pormenor de bolso no interior. Aplique de remendo e bordado combinados`,
    price: 479,
    nameFileImg1: 'product-3-1.jpg',
    nameFileImg2: 'product-3-2.jpg',
    nameFileImg3: 'product-3-3.jpg',
    nameFileImg4: 'product-3-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 4,
    brand: 'Zara',
    name: 'ZW vestido denim com bolsos',
    description: `Vestido midi de gola com lapela e manga comprida com acabamento em punho. Bolsos de patch com aba 
    e botão na frente.`,
    price: 439,
    nameFileImg1: 'product-4-1.jpg',
    nameFileImg2: 'product-4-2.jpg',
    nameFileImg3: 'product-4-3.jpg',
    nameFileImg4: 'product-4-4.jpg',
    categorie: 'Mulher',
  },
  {
    id: 5,
    brand: 'Zara',
    name: 'Vestido midi estampado',
    description: `Vestido midi confeccionado em viscose. Decote em V e manga comprida. 
    Cintura ajustável com cordões do mesmo tecido. Forro interior. Parte inferior com acabamento de babados.`,
    price: 699,
    nameFileImg1: 'product-5-1.jpg',
    nameFileImg2: 'product-5-2.jpg',
    nameFileImg3: 'product-5-3.jpg',
    nameFileImg4: 'product-5-4.jpg',
    categorie: 'Mulher',
  },
  {
    id: 6,
    brand: 'Zara',
    name: 'Blazer aberto de linho',
    description: `Blazer aberto de gola com lapela e manga comprida acabada em dobra. Detalhe de ombreiras. 
    Bolsos à frente com aba.Blazer aberto de gola com lapela e manga comprida acabada em dobra. 
    Detalhe de ombreiras.`,
    price: 379,
    nameFileImg1: 'product-6-1.jpg',
    nameFileImg2: 'product-6-2.jpg',
    nameFileImg3: 'product-6-3.jpg',
    nameFileImg4: 'product-6-4.jpg',
    categorie: 'Mulher',
  },
  {
    id: 7,
    brand: 'Zara',
    name: 'Casaco com algodão Steven Meisel',
    description: `Casaco comprido confeccionado em fiação com mistura de algodão. Gola com lapela e manga 
    comprida com presilhas e botão. Bolsos na frente. Forro interior do mesmo tom combinando.
    Bainha com abertura nas costas. Fecho frontal com botões ocultos por aba.`,
    price: 1499,
    nameFileImg1: 'product-7-1.jpg',
    nameFileImg2: 'product-7-2.jpg',
    nameFileImg3: 'product-7-3.jpg',
    nameFileImg4: 'product-7-4.jpg',
    categorie: 'Mulher',
  },
  {
    id: 8,
    brand: 'Zara',
    name: 'Camiseta de tricô com efeito de lavagem limited edition',
    description: `Camiseta oversize de tricô tecida em fios de algodão. Decote redondo e manga curta. 
    Acabamentos em nervuras.`,
    price: 279,
    nameFileImg1: 'product-8-1.jpg',
    nameFileImg2: 'product-8-2.jpg',
    nameFileImg3: 'product-8-3.jpg',
    nameFileImg4: 'product-8-4.jpg',
    categorie: 'Homem',
  },

  {
    id: 9,
    brand: 'Zara',
    name: 'Jaqueta bomber de poliuretano',
    description: `Jaqueta confeccionada em um tecido de poliuretano. Gola alta e manga comprida. 
    Bolsos de debrum no quadril e detalhe de bolso interior. Acabamentos com nervuras. Fecho frontal com zíper.`,
    price: 379,
    nameFileImg1: 'product-9-1.jpg',
    nameFileImg2: 'product-9-2.jpg',
    nameFileImg3: 'product-9-3.jpg',
    nameFileImg4: 'product-9-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 10,
    brand: 'Zara',
    name: 'Jaqueta denim Jacquard geométrico',
    price: 479,
    nameFileImg1: 'product-10-1.jpg',
    nameFileImg2: 'product-10-2.jpg',
    nameFileImg3: 'product-10-3.jpg',
    nameFileImg4: 'product-10-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 11,
    brand: 'Zara',
    name: 'Blazer com cinto com linho',
    description: `Blazer confeccionado com tecido em mistura de linho. Gola de abas com manga comprida e 
    ombreiras.Bolsos dianteiros com aba. Bainha com abertura atrás. Fecho frontal com botões e cinto fino 
    no mesmo tom.`,
    price: 599,
    nameFileImg1: 'product-11-1.jpg',
    nameFileImg2: 'product-11-2.jpg',
    nameFileImg3: 'product-11-3.jpg',
    nameFileImg4: 'product-11-4.jpg',
    categorie: 'Mulher',
  },

  {
    id: 12,
    brand: 'Zara',
    name: 'Blazer 100% linho',
    price: 379,
    description: `Blazer aberto de gola com lapela e manga comprida com uma dobra e com ombreiras.`,
    nameFileImg1: 'product-12-1.jpg',
    nameFileImg2: 'product-17-2.jpg',
    nameFileImg3: 'product-17-3.jpg',
    nameFileImg4: 'product-17-4.jpg',
    categorie: 'Mulher',
  },
  {
    id: 13,
    brand: 'Zara',
    name: 'Jaqueta de poliuretano',
    description: `Jaqueta confeccionada em um tecido de poliuretano. Gola com lapelas e detalhe de botões de
     pressão.Manga comprida com acabamento em punho com zíper. Bolsos frontais com zíper no peito e 
     no quadril.`,
    price: 559.9,
    nameFileImg1: 'product-13.jpg',
    nameFileImg2: 'product-13-2.jpg',
    nameFileImg3: 'product-13-3.jpg',
    nameFileImg4: 'product-13-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 14,
    brand: 'Zara',
    name: 'Tenis Europa',
    description: `Jaqueta confeccionada em um tecido de algodão. Gola alta e manga comprida com acabamento 
    em punho com botão. Bolsos de patch com aba no peito e no quadril. Efeito de lavagem. Fecho na frente 
    com zíper oculto por aba com botões de pressão.`,
    price: 699,
    nameFileImg1: 'product-14-1.jpg',
    nameFileImg2: 'product-14-2.jpg',
    nameFileImg3: 'product-14-3.jpg',
    nameFileImg4: 'product-14-4.jpg',
    categorie: 'Homem',
  },

  {
    id: 15,
    brand: 'Zara',
    name: 'Jaqueta de pelo sintético encaracolado estampado Tie-Dye',
    description: `Jaqueta relaxed fit de gola alta e manga comprida com acabamento de punho elástico.
    Bolso de patch no peito e bolsos com zíper no quadril. Fecho frontal com zíper.`,
    price: 439,
    nameFileImg1: 'product-15-1.jpg',
    nameFileImg2: 'product-15-2.jpg',
    nameFileImg3: 'product-15-3.jpg',
    nameFileImg4: 'product-15-4.jpg',
    categorie: 'Homem',
  },
  {
    id: 16,
    brand: 'Zara',
    name: 'Tenis de couro com peças limited edition',
    description: `Tênis. Fabricados em couro com combinação de outros materiais no corte. Base de cordões
    com oito passagens. Conta com um puxador na parte traseira para facilitar o calçar.Sola com volume 
    e design irregular.`,
    price: 379,
    nameFileImg1: 'product-16-1.jpg',
    nameFileImg2: 'product-16-2.jpg',
    nameFileImg3: 'product-16-3.jpg',
    nameFileImg4: 'product-16-4jpg',
    categorie: 'Sapatos',
  },
  {
    id: 17,
    brand: 'Zara',
    name: 'Tenis bota com cadarços',
    description: `Tênis tipo bota. Combinação de cores no corte. Base de cadarços com sete passagens.
     Sola com volume`,
    price: 299,
    nameFileImg1: 'product-17-1.jpg',
    nameFileImg2: 'product-17-2.jpg',
    nameFileImg3: 'product-17-3.jpg',
    nameFileImg4: 'product-17-4jpg',
    categorie: 'Sapatos',
  },
  {
    id: 18,
    brand: 'Zara',
    name: 'Tenis bota com cadarços',
    description: `Tênis. Combinação de peças e cores no corte. Base de cordões com seis passagens. 
    Sola com relevos e ligeiro volume. Design de inspiração retro.`,
    price: 379,
    nameFileImg1: 'product-18-1.jpg',
    nameFileImg2: 'product-18-2.jpg',
    nameFileImg3: 'product-18-3.jpg',
    nameFileImg4: 'product-18-4jpg',
    categorie: 'Sapatos',
  },
  {
    id: 19,
    brand: 'Zara',
    name: 'Camisa larga denim com patch',
    description: `Camisa larga denim de gola com lapela e manga comprida. 
    Fecho com botões de pressão na frente. Bolsos de patch na frente.`,
    price: 219,
    nameFileImg1: 'product-19-1.jpg',
    nameFileImg2: 'product-19-2.jpg',
    nameFileImg3: 'product-19-3.jpg',
    nameFileImg4: 'product-19-4jpg',
    categorie: 'Infantil',
  },
  {
    id: 20,
    brand: 'Zara',
    name: 'Bomber com patch de terrycloth',
    description: `Bomber de gola redonda e manga comprida. Fecho frontal com botões de pressão.
     Bolsos na frente. Acabamentos com nervuras. Aplique de patch no peito.`,
    price: 149,
    nameFileImg1: 'product-20-1.jpg',
    nameFileImg2: 'product-20-2.jpg',
    nameFileImg3: 'product-20-3.jpg',
    nameFileImg4: 'product-20-4jpg',
    categorie: 'Infantil',
  },
  {
    id: 21,
    brand: 'Zara',
    name: 'Camisa estampada',
    description: `Camisa de gola com lapelas e manga curta com acabamento em dobra. Fecho de botão na frente.`,
    price: 169,
    nameFileImg1: 'product-21-1.jpg',
    nameFileImg2: 'product-21-2.jpg',
    nameFileImg3: 'product-21-3.jpg',
    nameFileImg4: 'product-21-4jpg',
    categorie: 'Infantil',
  },
  {
    id: 22,
    brand: 'Zara',
    name: 'Conjunto camiseta e bermuda',
    description: `Conjunto de duas peças. Camiseta com gola redonda e de manga curta. Mensagem na frente.
     Bermuda com cós elástico e bolsos na frente.`,
    price: 119,
    nameFileImg1: 'product-22-1.jpg',
    nameFileImg2: 'product-22-2.jpg',
    nameFileImg3: 'product-22-3.jpg',
    nameFileImg4: 'product-22-4jpg',
    categorie: 'Infantil',
  },
  {
    id: 23,
    brand: 'Zara',
    name: 'Óculos de sol retangulares limited edition',
    description: `Óculos de sol com armação retangular em acetato. Inclui bolsa.`,
    price: 379,
    nameFileImg1: 'product-23-1.jpg',
    nameFileImg2: 'product-23-2.jpg',
    nameFileImg3: 'product-23-3.jpg',
    nameFileImg4: 'product-23-4jpg',
    categorie: 'Acessórios',
  },
  {
    id: 24,
    brand: 'Zara',
    name: 'Bolsa a tiracolo sport',
    description: `Bolsa a tiracolo. Fabricada em tecido técnico. O compartimento principal fecha-se com
     zíper e no seu interior tem um bolso de mesh sem fecho. Bolso duplo na parte frontal com zíper.
     Conta com uma alça de ombro ajustável e removível.`,
    price: 159,
    nameFileImg1: 'product-24-1.jpg',
    nameFileImg2: 'product-24-2.jpg',
    nameFileImg3: 'product-24-3.jpg',
    nameFileImg4: 'product-24-4jpg',
    categorie: 'Acessórios',
  },
  {
    id: 25,
    brand: 'Zara',
    name: 'Bolsa a tiracolo sport',
    description: `Pochete suave. Corte em nylon. O compartimento principal fecha-se com zíper e conta com
     um bolso sem fecho no seu interior. Bolso frontal com zíper. Bolso traseiro com zíper. Alça ajustável
     com fecho esportivo.`,
    price: 199,
    nameFileImg1: 'product-25-1.jpg',
    nameFileImg2: 'product-25-2.jpg',
    nameFileImg3: 'product-25-3.jpg',
    nameFileImg4: 'product-25-4jpg',
    categorie: 'Acessórios',
  },
];
const newDatasheet = datasheet;

export function productGenerate(newDatasheet) {
  document.getElementById('container-card-product').innerHTML = '';
  for (const product of newDatasheet) {
    const cardProduct = `<div id="card-product-${product.id}" class='card'>
      <img id="imgProduct1-${product.id
      }" class='imgProduct imgProduct1 opacity1'src="./assets/img/${product.nameFileImg1
      }"> 
      <img id="imgProduct2-${product.id
      }" class='imgProduct imgProduct2 opacity0'src="./assets/img/${product.nameFileImg2
      }" 
      alt="Produto ${product.id} da Magazine Hashtag"/>
      <p class='description text'>${product.name} - ${product.brand}</p>
        <div class="blockPrice">
          <div>
            <p class='price text'>
              R$${product.price.toFixed(2)}
            </p>
            <p class='priceBefore text'>
              R$${(product.price * 1.1).toFixed(2)}
            </p>
          </div>
          <button id="btnProduct-${product.id}" class="btnAdd"> 
          <span class="material-icons-outlined">
          local_mall
          </span>
          </button>
        </div>`;
    document.getElementById('container-card-product').innerHTML += cardProduct;
  }
  for (const product of newDatasheet) {
    document
      .getElementById(`btnProduct-${product.id}`)
      .addEventListener('click', () => addInBag(product.id));
    document
      .getElementById(`imgProduct2-${product.id}`)
      .addEventListener('click', () => infoProduct(product.id));
  }
  var imgCard = document.getElementsByClassName('imgProduct');
  for (var img of imgCard) {
    img.addEventListener('mouseover', (event) => mouseOver(event));
    img.addEventListener('mouseout', (event) => mouseOut(event));
  }
}

function mouseOver(event) {
  const id = event.target.id;
  const idNum = id.substring(id.indexOf('-') + 1);
  const img1 = document.getElementById(`imgProduct1-${idNum}`);
  const img2 = document.getElementById(`imgProduct2-${idNum}`);
  img1.classList.remove('opacity1');
  img1.classList.add('opacity0');
  img2.classList.remove('opacity0');
  img2.classList.add('opacity1');
}
function mouseOut(event) {
  const id = event.target.id;
  const idNum = id.substring(id.indexOf('-') + 1);
  const img1 = document.getElementById(`imgProduct1-${idNum}`);
  const img2 = document.getElementById(`imgProduct2-${idNum}`);
  img1.classList.add('opacity1');
  img1.classList.remove('opacity0');
  img2.classList.add('opacity0');
  img2.classList.remove('opacity1');
}
export function infoProduct(id) {
  const idItem = id;
  const product = datasheet.find((p) => p.id == idItem);
  localStorage.setItem('infoProduct', JSON.stringify(product));
  window.location.href = 'detailsProduct.html';
}

