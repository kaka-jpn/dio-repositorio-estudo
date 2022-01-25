# Set

### Estrutura

> sets são estruturas que armazenam apenas valores únicos


### métodos

	adicionar, consultar e deletar

const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.has(1);
mySet.has(3);
mySet.delete(5);


### Set vs Array
- possui valores únicos
- em vez da propriedade length, consulta-se o número de registro pela propriedade size
- não possui os métodos map, filter, reduce e etc...

