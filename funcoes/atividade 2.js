function calculaIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carla",
    idade: 20,
};

const animal = {
    nome: "hanna",
    idade: 12,
    raca: "vira-lata",
};