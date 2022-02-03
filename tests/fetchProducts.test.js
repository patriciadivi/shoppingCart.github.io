require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  it('I - Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('II - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('III - Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalledWith(url); //toHaveBeenCalledWith: compara a se a expect(o esperado) existe dentro do que passou.
  });

  it('IIII - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async ()  => {
    const objfetchProducts = await fetchProducts('computador')
    expect(objfetchProducts).toEqual(computadorSearch)
  });

  it('V - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error("mensagem esperada aqui") para comparar com o objeto retornado da API.', async () => {
    expect.assertions(1) // Da prioridade para a expect(o esperado), dentro do catch(error)
    try {
    const objfetchProducts = await fetchProducts()
    } catch (error) {
    expect(error).toEqual(new Error ('You must provide an url'))
    }
  });
  
});
