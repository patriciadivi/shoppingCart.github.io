const elementComputador = 'computador';
const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?q=${elementComputador}`;

const fetchProducts = async () => {
  // seu código aqui
  const response = await fetch(END_POINT);
  const { results } = await response.json();
  return results;
};
fetchProducts().then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}