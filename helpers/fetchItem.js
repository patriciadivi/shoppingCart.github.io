const fetchItem = async (idProduct) => {
  // seu código aqui
  const END_POINT = `https://api.mercadolibre.com/items/${idProduct}`;
  const response = await fetch(END_POINT);
  const resultsItem = await response.json();
  // console.log(resultsItem);
  return resultsItem;
};
// fetchItem('MLB1607748387');
// fetchItem('MLB1607748387').then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
