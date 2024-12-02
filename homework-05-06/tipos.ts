
type Status = 'ativo' | 'inativo' | 'pendente' | 'bloqueado';

function getStatusMessage(status: Status): string | null {

    if (status === 'ativo') {
        return 'O usuário está ativo.';
    }
    
    if (status == 'inativo') {
        return 'O usuário está inativo';
    }

    if (status == 'pendente') {
        return 'O status do usuário esta pendente';
    }

    if (status == 'bloqueado') {
        return 'O usuário esta bloqueado';
    }

    return null;

}

class User {

    Unome:string;
    Ustatus:Status;

    constructor(nome:string,status:Status) {
        this.Unome = nome;
        this.Ustatus = status;
    }

}

const user1 = new User('Júlio','ativo');
const user2 = new User('João','inativo');
const user3 = new User('Carlos','pendente');
const user4 = new User('Marcos','bloqueado');

console.log(getStatusMessage(user1.Ustatus));
console.log(getStatusMessage(user2.Ustatus));
console.log(getStatusMessage(user3.Ustatus));
console.log(getStatusMessage(user4.Ustatus));
