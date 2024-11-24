export class Data {

    dataCompleta:string;
    dataSeparada:Array<string>;
    dataJs:Date;

    constructor(data:string) {

        this.dataSeparada = data.split('/');

        this.dataJs = new Date(parseInt(this.dataSeparada[2]),parseInt(this.dataSeparada[1]) - 1,parseInt(this.dataSeparada[0]))

        const dataVerificacao = `${this.dataJs.getDate().toString().padStart(2, '0')}/${(this.dataJs.getMonth() + 1).toString().padStart(2, '0')}/${this.dataJs.getFullYear()}`;

        if (data == dataVerificacao) {
            this.dataCompleta = data;
        }else{
            this.dataCompleta = '01/01/0001';
            this.dataSeparada = this.dataCompleta.split('/');
            this.dataJs = new Date(1,0,1)
        }

    }

    getDia():string {
        return this.dataSeparada[0];
    }

    getMes():string {
        return this.dataSeparada[1];
    }

    getMesExtenso():string{

        const mesesExtenso = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

        return mesesExtenso[parseInt(this.getMes()) - 1]

    }

    getAno():string {
        return this.dataSeparada[2];
    }

    isBissexto():boolean {

        const verificarBissexto = new Date(parseInt(this.getAno()),1,29)

        if (verificarBissexto.getMonth() == 1) {
            return true;
        }

        return false;

    }

}

const aniversario = new Data('14/12/2024');

console.log("Print Exercício 1")
console.log("_______________________________________________________________________________________________")

console.log(`Data: ${aniversario.getDia()}/${aniversario.getMes()}/${aniversario.getAno()}`);
console.log(`Mês da data: ${aniversario.getMesExtenso()}`);
console.log(`Ano bissexto: ${aniversario.isBissexto()}`);