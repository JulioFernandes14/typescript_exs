import {Data} from './Data.ts';
import { Cadeira } from './Cadeira.ts';

class Voo {

    numeroVoo:number;
    dataVoo:Data;
    cadeirasVoo:Array<Cadeira>

    constructor(numero:number, data:string) {

        this.numeroVoo = numero;
        this.dataVoo = new Data(data);
        this.cadeirasVoo = new Array(100);

        for (let i:number = 0; i < 100; i++) {

            this.cadeirasVoo[i] = new Cadeira(i + 1);

        }

    }

    encontrarCadeira(numCadeira:number): Cadeira | false {

        let cadeiraR:Cadeira|false = false;

        this.cadeirasVoo.forEach(cadeira => {

            if (cadeira.numeroCadeira == numCadeira) {
                cadeiraR = cadeira
            }

        });

        return cadeiraR;

    }

    proximaLivre():number | false{

        for (let i:number = 0; i < 100; i++) {

            if (!this.cadeirasVoo[i].ocupada) {
                return this.cadeirasVoo[i].numeroCadeira;
            }

        }

        return false;

    }

    verifica(numCadeira:number):string | false {

        const cadeira = this.encontrarCadeira(numCadeira);

        if (cadeira) {
            
            if (cadeira.ocupada) {
                return 'Ocupada';
            }

            return 'Vazia';

        }

        return false;

    }

    ocupa(numCadeira:number):boolean {

        const cadeira = this.encontrarCadeira(numCadeira);

        if (cadeira) {

            if (cadeira.ocupada) {
                return false;
            }

            cadeira.ocupar();

            return true

        }

        return false;

    }

    vagas():number {

        let vagas:number = 0;

        this.cadeirasVoo.forEach(cadeira => {

            if (!cadeira.ocupada) {
                vagas++;
            }

        });

        return vagas;

    }

    getVoo():number {
        return this.numeroVoo;
    }

    getData() {
        return this.dataVoo;
    }

}

const manifest = new Voo(828,'07/04/2013');

manifest.ocupa(Math.floor(1));
manifest.ocupa(Math.floor(2));
manifest.ocupa(Math.floor(3));
manifest.ocupa(Math.floor(4));
manifest.ocupa(Math.floor(5));
manifest.ocupa(Math.floor(6));
manifest.ocupa(Math.floor(7));
manifest.ocupa(Math.floor(8));
manifest.ocupa(Math.floor(9));
manifest.ocupa(Math.floor(10));
manifest.ocupa(Math.floor(11));
manifest.ocupa(Math.floor(12));
manifest.ocupa(Math.floor(13));
manifest.ocupa(Math.floor(14));
manifest.ocupa(Math.floor(15));
manifest.ocupa(Math.floor(16));
manifest.ocupa(Math.floor(17));
manifest.ocupa(Math.floor(18));
manifest.ocupa(Math.floor(19));
manifest.ocupa(Math.floor(20));



let cadeiraLivre = manifest.proximaLivre();

console.log(`Número voo: ${manifest.getVoo()}`);
console.log(`Data voo: ${manifest.getData().dataCompleta}`);
console.log("________________________________________________________________________________");
console.log(`Próxima cadeira livre: ${cadeiraLivre}`);

if (cadeiraLivre) {
    console.log(`Cadeira ${cadeiraLivre} está: ${manifest.verifica(cadeiraLivre)}`);
    console.log(`Tentando ocupar a cadeira ${cadeiraLivre}: ${manifest.ocupa(cadeiraLivre)}`);
}

console.log(`Quantidade cadeira vagas: ${manifest.vagas()}`);