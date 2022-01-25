# tipos de erros

### ECMAScript Error
	erros que ocorrem em tempo de execução


_composto por:_

- mensagem
- nome
- linha
- call stack

### DOMException
	erros relacionados ao Document Object Model (DOM)



Qual a composição de um ECMAScript Error?
mensagem, nome, linha call stack

Qual é a grande vantagem do bloco catch?
a possibilidade de manipular o tratamento de um erro com maior flexibilidade

Qual a diferença entre throw e return?
throw lança um erro, enquanto o return retorna um valor

Sobre a declaração try...catch, é correto afirmar que:
dentro do bloco try são executadas instruções e caso ocorra algum erro durante o processo, ele será tratado no bloco catch

Selecione a opção que possui o instanciamento de um erro personalizado de forma correta:
const meuErro = new Error()


Dado o código:
const NovoErro = new Error();
NovoErro.name = "Novo Erro";
NovoErro.message = "Este erro nunca ocorreu"
Qual será o retorno quando ele for lançado?
novo erro: este erro nunca ocorreu

Sobre o bloco catch, é correto afirmar que:
é executada apenas quando ocorre um erro e possibilita a manipulação de um objeto Error

Sobre a declaração finally, é correto afirmar que:
é executada sempre, independente de erros ocorrerem ou não


Dado o código:
function validaArray(arr, tamanho) {
  try {
    if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");

    return arr;
  } catch(e) {
    if (e instanceof RangeError) {
      return console.log(e.message);
    } else {
      return e;
    }
  }
} 
validaArray();
Qual será o retorno?
outro tipo de erro







