# Funcões

Estrutura
definição comum de uma função
> variaveis criadas dentro de uma função apenas podem ser utilizadas dentro dela

> function nome(parametro) {  
    //instruções  
}

> quando invocamos o "return" a função para de ser executada

> function nome(parametro) {  
    //instruções
    return; //valor de retorno  
}

### Função anônima 
 
 Funções que representam expressões

 > Uma variavel pode armazenar uma função

> const soma = function(a,b) {  
    return a + b;  
}  
soma(1,2) //3  
soma(5,4) //9



### Função autoinvocável

IIFE (immediately Invoked Function Expression)

> Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada

> function () {  
    let name = "Digital Innovation One"  
    return name;    
}

> Também pode ser utilizada com parâmetros ou armazenada em uma variável

>(   
function (a,b) {  
    return a + b;    
}
)(1,2);  

> const soma3 = (  
    function() {  
        return a + b;  
    }  
)(1,2);  
console.log(soma3) // 3

### Callbacks

Uma função passada como argumento para outra

> Utilizando callbacks, você tem maior controle da ordem de chamadas

> const calc = function(operacao, num1, num2) {  
    return operacao(num1, num2);  
}  
const soma = function(num1,num2) {  
    return num1 + num2;  
}  
const sub = function(num1,num2) {  
    return num1 - num2;  
}  
const resultSoma = calc(soma, 1,2);  
const resultSub = calc(sub, 1,2);  
console.log(resultSub);  
console.log(resultSoma);