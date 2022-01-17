# Parâmetros

Valores padrão  
Pré-ES2015  
Pós-ES2015


### Objeto "arguments"

> Um array com todos os parâmetros passados quando a função foi invocada

>function findMax() {  
    let max = -Infinity;  
    for(let i = 0; i < arguments.length; i++) {  
        if (arguments[i];)  
    }  
    return max;  
}


> function showArgs() {  
    return arguments;  
}

***

### Array e Objetos

arrays:  
spread: uma forma de lidar separadamente com elementos

> O que era parte de um array se torna um elemento independente


> function sum(x,y,z) {  
    return x + y + z;  
}  
const numbers = [1,2,3];  
console.log(sum(...numbers));  

Rest: combina os argumentos em um array

> O que era um elemento independente se torna parte de um array

> function confereTamanho(...args) {  
    console.log(args.length)  
}  
confereTamanho() // 0  
confereTamanho(1,2) // 2  
confereTamanho(3,4,5) // 3  


Objetos:

objetc Destructuring 

> Entre chaves, podemos filtrar apenas os dados que nos interessam em um objeto

> const user = {  
    id: 42,  
    displayName: "jdoe",  
    fullName: {  
        firstName: "John",  
        lastName: "Doe"  
    }  
};  
function userId({id}) {  
    return id;  
}  
function getFullName({fullName: {firstName: first, lastName: last)}} {  
    return `$(first) $(last)`;  
}  
userId(user)  
//42  
getFullName(user)  
// John Doe  


