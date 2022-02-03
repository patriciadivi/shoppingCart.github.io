function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  // e.addEventListener('click', clickButtom);
  return e;
}

// function clickButtom() {
//   return alert('Foi');
// }
// clickButtom();

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { // alias {
  const section = document.createElement('section');
  section.className = 'item';
  const newImageQuality = image.split('-');
  const imageQuality = [...newImageQuality[0], '-', ...newImageQuality[1], '-J.jpg'].join('');
  console.log(imageQuality);
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

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// function cartItemClickListener(event) {
//   // coloque seu código aqui
// }

// function createCartItemElement({ sku, name, salePrice }) {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
//   li.addEventListener('click', cartItemClickListener);
//   return li;
// }

window.onload = () => { };
