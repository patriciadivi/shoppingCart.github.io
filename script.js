const showCardOl = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function cartItemClickListener(event) {
  const element = event.target;
  showCardOl.removeChild(element);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function showCard(resId) {
  const idItem = await fetchItem(resId);
  const { id, title, price } = idItem;
  // console.log(title);
  showCardOl.appendChild(createCartItemElement({ id, title, price }));
  // saveCartItems(showCardOl.innerText);
  // const saveIdLocalStorage = [];
  // saveIdLocalStorage.push(saveCartItems({ id }));
  // saveCartItems({ id });
  // console.log(idItem);
  // console.log(idItem.id);
  // console.log(Object.assign([idItem.id, idItem.title, idItem.title]));
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
    console.log(id);
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

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { // alias {
  const section = document.createElement('section');
  section.className = 'item';
  const newImageQuality = image.split('-');
  const imageQuality = [...newImageQuality[0], '-', ...newImageQuality[1], '-J.jpg'].join('');
  // console.log(imageQuality);
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(imageQuality));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

async function createShoppingCard() {
  const fetchP = await fetchProducts('computador');
  const getSection = document.querySelector('.items');
  // console.log(getSection);
  fetchP.results.forEach((elementCreate) => {
    getSection.appendChild(createProductItemElement(elementCreate));
  });
}
createShoppingCard();

window.onload = () => {
  saveCartItems();
  // const tela = JSON.parse(localStorage.getItem('chave'));
  // // localStorage.setItem('chave', JSON.stringify("<p class='test'>u</p>"));
  // // localStorage.setItem('chave', JSON.stringify("<p class='test'>u</p>"));
  // showCardOl.innerHTML = tela;
  // // console.log(typeof JSON.parse(localStorage.getItem('chave')));
};
