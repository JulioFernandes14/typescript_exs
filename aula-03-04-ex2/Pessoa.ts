class Pessoa {

    nome:string;
    dataNascimeno:Date;
    genero:string;

    constructor(n:string,dt:Date,gen:string) {
        this.nome = n;
        this.dataNascimeno = dt;
        this.genero = gen;
    }

}

const p = new Pessoa("Júlio Fernandes",new Date(2005,11,14),'Masculino');

console.log(p);