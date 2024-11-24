export class Cadeira {

    numeroCadeira:number;
    ocupada:boolean;

    constructor(num:number) {
        this.numeroCadeira = num;
        this.ocupada = false;
    }

    ocupar():void {
        this.ocupada = true;
    }

}