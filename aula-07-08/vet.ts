type AnimalT = 'Cachorro' | 'Gato' | 'Peixe'

class Animal {

    nome:String;
    tipo:AnimalT;

    constructor(nome:String, tipo:AnimalT) {

        this.nome = nome;
        this.tipo = this.retornaTipo(tipo);

    }

    retornaTipo(tipo:AnimalT):AnimalT {

        if (tipo == 'Cachorro') {
            return 'Cachorro';
        }

        if (tipo == 'Gato') {
            return 'Gato';
        }

        return 'Peixe';

    }

}

function contarAnimais(animais:Array<Animal>):Object {

    let animaisCont = {
        cachorro:0,
        gato:0,
        peixe:0
    };

    animais.forEach(animal => {

        if (animal.tipo == 'Cachorro') {
            animaisCont.cachorro++;
        }else if (animal.tipo == 'Gato') {
            animaisCont.gato++;
        }else{
            animaisCont.peixe++;
        }

    })

    return animaisCont;

}

let vetorAnimais:Array<Animal> = new Array();

vetorAnimais.push(new Animal('Bob','Cachorro'));
vetorAnimais.push(new Animal('Miguel','Gato'));
vetorAnimais.push(new Animal('Frajola','Gato'));
vetorAnimais.push(new Animal('Nemo','Peixe'));
vetorAnimais.push(new Animal('Mimosa','Vaca'));

console.log(contarAnimais(vetorAnimais));