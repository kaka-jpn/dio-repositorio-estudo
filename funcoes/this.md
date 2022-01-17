## This

A palavra reservada this é uma referência de contexto

No exemplo, this refere-se ao objeto pessoa
>const pessoa = {  
    firstName: "Andre",  
    lastName : "Soares",  
    id       : 1,  
    fullName : function() {  
        return this.firstName + " " + this.lasName;
    },  
    getId: function() {  
        return this.id;  
    }  
};  

Seu valor pode mudar de acordo com o lugar no código onde foi chamada

em um objeto : proprio objeto dono do metodo  
sozinha : objeto global  
função : objeto global  
evento : elemento  

### Call

> const pessoa = {    
    nome: "Miguel",  
};  
const animal = {
    nome: "Perebas",  
};  
function getSomething() {  
    console.log(this.nome);  
}  
getSomething.call(pessoa);  

É possível passar parâmetros para essa função separando-os por vírgulas

> const myObj = {  
    num1: 2,  
    num2: 4,  
};  
function soma(a, b) {  
    console.log(this.num1 + this.num2 + a + b);  
}  
soma.call(myObj, 1, 5);  

### Apply
Transforma o valor de this no do objeto enviado como primeiro parâmetro e aceita outros parâmetros atraves de um array.   
É reuitivlizavel em outros objetos  

> const pessoa = {  
    nome: "Miguel",  
};  
const animal = {  
    nome: "Perebas",  
};  
function getSomething() {  
    console.log(this.nome);  
}  
getSomething.apply(pessoa);  

### Bind
Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

> const retornaNomes = function () {  
    return this.nome;  
};  
let bruno = retornaNomes.blind({ nome: "bruno" });
bruno();  




















