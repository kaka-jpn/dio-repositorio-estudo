## Arrow functions

> const helloWorld = () => "Hello World";  

> const soma = (a, b) => a + b;  
soma(4,6);  

> const soma = a => a;  
soma(4);  

Outras restrições

- "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar  
- Não existe o objeto "arguments";  
- O construtur (ex new MeuObjeto()) também não pode ser utilizado  