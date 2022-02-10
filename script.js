const showCardOl = document.querySelector('.cart__items');
const buttomClear = document.querySelector('.empty-cart');
const getSection = document.querySelector('.items');

function saveLocalStorage() {
  const arrayLis = Array.from(showCardOl.children).map((element) => element.id);
  saveCartItems(arrayLis); 
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function totalPrice(totalValue) { // toString
  const span = document.querySelector('.total-price');
  const aside = document.querySelector('#totalPrice');
  span.innerText = totalValue; // Passa a ser string pois, o innerText transforma o parametro.
  aside.appendChild(span);
}

function sumePrices() {
  const arrLiItems = Array.from(showCardOl.children);
  const valeuTotal = arrLiItems.reduce((acc, element) =>
   acc + Number(element.innerText.split('$')[1]), 0);
  const valueEnd = valeuTotal; // .toFixed(2);
  const priceEnd = valueEnd;// .toString();
  return totalPrice(priceEnd);
}

function cartItemClickListener(event) {
  const element = event.target;
  showCardOl.removeChild(element);
  saveLocalStorage();
  sumePrices();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.id = sku;
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function showCard(resId) {
  const idItem = await fetchItem(resId);
  const { id, title, price } = idItem;
  showCardOl.appendChild(createCartItemElement({ id, title, price }));
  saveLocalStorage();
  sumePrices();
}

function getLiLocalStorage() {
  const lisSave = JSON.parse(getSavedCartItems());
  if (lisSave) lisSave.forEach((sku) => showCard(sku));
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function clickButtom(event) {
  // REF = https://www.w3schools.com/jsref/prop_node_firstchild.asp
  const element = event.target;
  if (element.classList.contains('item__add')) {
    const id = getSkuFromProductItem(element.parentNode);
    // const id = element.parentElement.firstElementChild.innerText;
    // const id = element.parentElement.childNodes[0].innerText;
    // console.log(id);
    return showCard(id);
  }
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.addEventListener('click', clickButtom);
  return e;
}

buttomClear.addEventListener('click', () => {
  showCardOl.innerHTML = '';
  localStorage.clear();
});

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { // alias {
    const section = document.createElement('section');
    section.className = 'item';
    section.innerText = 'carregando';
    const newImageQuality = image.split('-');
    const imageQuality = [...newImageQuality[0], '-', ...newImageQuality[1], '-J.jpg'].join('');
    section.innerText = '';
    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(imageQuality));
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function test() {
  const sectionTempo = document.createElement('section');
    sectionTempo.className = 'loading';
    sectionTempo.innerText = 'carregando';
    
    return sectionTempo;
}

async function createShoppingCard() {
  const fetchP = await fetchProducts('computador');
  fetchP.results.forEach(() => {
    getSection.appendChild(test());
  });
  setTimeout(() => {
    getSection.innerText = '';
    fetchP.results.forEach((elementCreate) => {
      getSection.appendChild(createProductItemElement(elementCreate));
    });
  }, 2000);
}

window.onload = () => {
  createShoppingCard();
  getLiLocalStorage();
};
