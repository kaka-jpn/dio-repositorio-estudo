# Map

### caracteristicas

- uma coleção de arrays no formato [chave,valor]
- pode iterado por um loop

### métodos

	Adicionar, ler e deletar

const myMap = new Map()  
myMap.set('apple', 'fruit');  
myMap.get(apple)
myMap.delete("apple")  
myMap.get("apple")  

### Map vs objeto

- maps podem ter chaves de qualquer tipo
- maps possuem a propriedade length
- maps são mais fáceis de iterar
- utilizado quando o valor das chaves é desconhecido
- os valores tem o mesmo tipo