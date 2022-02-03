 const fetchProducts = async (computador) => {
  // seu código aqui
  const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const response = await fetch(END_POINT);
  const results = await response.json();
  return results;
};
// fetchProducts('computador').then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
