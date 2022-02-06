const saveCartItems = (paramentCardOl) => {
  // seu código aqui
  localStorage.setItem('cartItems', JSON.stringify(paramentCardOl));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
