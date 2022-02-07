const saveCartItems = (paramentCardOl) => {
  // seu código aqui
  localStorage.setItem('cartItems', JSON.stringify(paramentCardOl));
  return saveCartItems;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
