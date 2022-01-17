# Loops

### If / else

> functionn numeroPositivo(num) {  
    let resultado;  
    if(num < 0) {  
        resultado = false;  
    } else {  
        resultado = true;  
    }
    return resultado;  
}

> function numeroPositivo(num) {  
    const ehNegativo = num < 0;  
    const maiorQueDez = num > 10;  
    if (ehNegativo) {  
        return "Esse número é negativo!";  
    } else if ("ehNegativo && maiorQueDez) {  
        return "Esse número é positivo e maior que 10!"  
    }  
    return "Esse número é positivo!";  
}

### Switch / case

Equivale a uma comparação de tipo e valor (===)  
Sempre precisa de um valor "default"  
Ideal para quando se precisa comparar muitos valores  

> function getAnimal(id) {  
    switch(id) {  
        case 1:  
        return "cão";  
        case 2:  
        return "gato";  
        case 3:  
        return "pássaro";  
        default:  
        return "peixe";  
    }  
}


### FOR
Loop dentro de elementos iteráveis (array, strings)

> function multiplicadoPorDois(arr) {  
    let multiplicados = [];  
    for (let i = 0; i < arr.length; i ++) {  
        multiplicados.push(arr[i] * 2);  
    }  
    return  
}  
const meusNumeros = [2, 33, 456, 356, 40];  
multiplicaPorDois(meusNumeros);  

### For In  
Loop entre propriedades enumeráveis de um objeto


### For of  
Loop entre estruturas iteráveis (arrays, strings)

### While  
Executa instruções até que a condição se torne falsa

> function exemploWhile() {  
    let num = 0;  
    while(num <= 5) {  
        console.log(num);  
        num++;  
    }  
}  

### Do while  
Executa instruções até que a condição se torne falsa
Porém a primeira execução sempre ocorre