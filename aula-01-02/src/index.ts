interface Person {
    nome:string,
    idade:number,
    isStudent:boolean
}

const people = (person:Person):string => {
    return `A pessoa cadastrada tem o nome ${person.nome} e ${person.idade} anos`;
}

const pessoaCadastrada = {
    nome:"Júlio",
    idade:18,
    isStudent:true
}

console.log(people(pessoaCadastrada))