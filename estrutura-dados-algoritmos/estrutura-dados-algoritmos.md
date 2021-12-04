# Estrutura de Dados e Algoritmos

------

## Estruturas de dados

- É uma estrutura organizada de dados na memoria de um computador



## Algoritmo

- É um conjunto de instruções estruturadas e ordenadas, com objetivo de realizar uma tarefa ou operação especifica



## Vetores e Matrizes

**Vetores e Matrizes** ou **Arrays** não estrutura de dados simples que podem auxiliar quando já muitas variáveis do mesmo tipo

### Vetor

- **Vetor** ou array uni-dimensional é uma variável que armazena várias variáveis do mesmo tipo
- É uma estrutura de dados indexada, que pode armazenar um determinada quantidade de valores do mesmo tipo

exemplo:

`programa {`

`funcao inicio() {`

`inteiro numeros[] = {39, 45, 54, 55}`

`para (inteiro posicao = 0; posicao <=3; posicao++){`

`escreva(numeros[posicao], " ")`

`}`

`}`

`}`

### Matriz

- Matriz ou array multi-dimensional é um vetor de vetores
- Uma matriz é um vetor que possui duas ou mais dimensões



## Registro

Registro é uma estrutura que fornece um formato especializado para armazenar informações em memoria

![image-20211203145848335](C:\Users\kazuo\AppData\Roaming\Typora\typora-user-images\image-20211203145848335.png)



------



## Listas, pilha e fila

### Listas

- Estrutura de Dados do tipo Lista, armazena dados de um determinado tipo em uma ordem especifica
- Listas possuem tamanho ajustável

### Lista ligada

nó

### Pilhas

- É uma estrutura de dados que serve como uma coleção de elementos, e permite o acesso a somente um item de dados armazenado

#### LIFO ou UEPS

- A estrutura do tipo pilha LIFO (last in first out) ou UEPS (último que entra primeiro que sai), apresenta o seguinte critério: o primeiro elemento a ser retirado é o último que tiver inserido

#### FIFO ou PEPS

- A estrutura do tipo PILHA FIFO (first in first out) ou PEPS (primeiro que entra primeiro que sai), apresenta o seguinte critério: o primeiro elemento a ser retirado é o primeiro que tiver sido inserido

### Filas

A estrutura do tipo Fila admite remoção de elementos e inserção de novos sujeita à seguinte regra de operação:

o elemento removido é o que está na estrutura há mais tempo



Arvore

Tabela hash

Grafos



arvore é uma estrutura de dados que organiza seus elementos de forma hierárquica, onde existe um elemento que fica no topo da árvore, chamado de raiz e existem os elementos subordinados a ele, que são chamados de nós ou folhas 



Tabela Hash

uma tabela hash, de dispersão ou espalhamento é um estrutura de dados especial, que associa chaves de pesquisa a valores



Grafos

grafos são estrutura que permitem programar a relação entre objetos







##### Qual a diferença entre os arrays e a estrutura registro?

array permitem armazenar vários dados de um unioc tipo de dados, registro permite armazenar mais de um tipo de dado



##### Em um algoritmo, como podemos acessar um campo de um registro?

utilizando o simbolo de ponto

##### Qual das estruturas de dados a seguir é flexível/genérica o suficiente para a criação de algoritmos de Fila e Pilha?

vetor



