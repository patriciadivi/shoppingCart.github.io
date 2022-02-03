require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('I - Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  it('II - Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () =>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('III - Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    expect(fetch).toHaveBeenCalledWith(url); //toHaveBeenCalledWith: compara a se a expect(o esperado) existe dentro do que passou.
  });

  it('IIII - Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async ()  => {
    const objfetchItem = await fetchItem('MLB1615760527')
    expect(objfetchItem).toEqual(item)
  });

  it('V - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error("mensagem esperada aqui") para comparar com o objeto retornado da API.', async () => {
    expect.assertions(1) // Da prioridade para a expect(o esperado), dentro do catch(error)
    try {
    const objfetchItem = await fetchItem()
    } catch (error) {
    expect(error).toEqual(new Error ('You must provide an url'))
    }
  });
});
