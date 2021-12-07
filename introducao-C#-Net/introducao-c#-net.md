Introdução ao C# e .Net



.Net

é um framework criado pela Microsoft que permite a comunicação entre várias linguagens que tem uma infraestrutura comum (CLI), entre elas o Visual Basic, C++, F# e C#

C#

uma linguagem orientada a objetos fortemente tipada. A sintaxe orientada a objetos foi baseado no C++ e possui influência de outras linguagens de programação como Object Pascal e Java



os diretórios e arquivos do projeto podem ser visto pelo gerenciador de soluções, que pode ser acessado pelo menu Exibir

No gerenciador de soluções podemos adicionar mais projetos, classes ao projeto, diretório, e mexer no projeto de forma geral

Estrutura - Namespace

Namespaces são usados para organizar classes

Para usar uma classe de outro namespace, colocamos **using** no começo do código

 

estrutura - classe

uma classe pode ter campos, propriedades, métodos e ventos dentro delas são denominados membros

class Animal
{
	2 referencias
	public string Nome { get; set;}
	2 referencias
	public int Idade { get; set;}
	2 referencias
	public string Especie { get; set;}
}

Quando uma classe é instaciada, essa instancia é chamada de objeto, e nesse objeto podem ser criados os valores de acordo com os campos da classe

Animal animal1 = new Animal();

animal1.Nome =  "Marley";
animal1.Idade = 5;
animal1.Especie = "Cachorro"

Program.cs

namespace CSharp
{
	class Program
	{
		static void Main(string[] args)
		{
			Pessoa person = new Pessoa();
			
			person.Nome =	"Giovanna";
			person.Idade = 18;
			person.Estado = "SP";
			
			var person2 = new Pessoa();
			
			person2.Nome = "Julia";
			person2.Idade = 23;
			person2.Estado = "MG";
			
			var classe = new Classe();
			var classe2 =  new Segundo.Classe();
		}
	}
}


Estrutura - Interface

É como uma classe base que serve de molde para várias classes.
Uma classe que implementa uma interdace deve implementar todos os membros.

interface Ipessoa
{
	void Nome (string nome);
	void Idade (int idade);
}


Estrutura - Enum

Declara um conjunto de constantes nomeadas que começam do 0 e aumentam de 1 em 1.

enum Pessoas
{
	Giovanna,
	Julia,
	João,
	Gustavo,
}


Debugging
A depuração pode ser feita colocando um BreakPoint no canto esquerdo do código ou apertando f9 e executando ele
O código vai parar one foi colocado o BreakPoint e então o código poderá ser inspecionado


O que é Interface no C#?
É uma classe base que serve de molde para várias classes

Qual finalidade dos Namespaces?
Uma estrutura para organizar classes

O que é uma solução?
É um container para organizar os projetos relacionados

Qual a finalidade do Enum e como são organizados os valores?

De que forma podemos adicionar mais projetos, classes ao projeto e diretórios a nossa solução?
Pelo gerenciador de soluções

O que é .Net?
Framework criado pela Microsoft

Como criar um objeto?
Criando uma instância de uma classe

O que é C#?
Uma linguagem orientada a objetos fortemente tipada


