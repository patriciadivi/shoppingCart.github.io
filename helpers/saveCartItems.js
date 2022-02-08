const saveCartItems = (paramentCardOl) => 
localStorage.setItem('cartItems', JSON.stringify(paramentCardOl));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
