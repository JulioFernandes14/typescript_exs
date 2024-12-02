interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    quantidadeEmEstoque:number;
    desconto?: number;
}
   
function correcaoValorPorEstoque(valor:number, produto: Produto):number {

    if (produto.quantidadeEmEstoque > 5) {
        return valor;
    }

    return valor + (valor * 0.15);

}

function calcularPrecoFinal(produto: Produto): number {

    if (produto.desconto) {
        return correcaoValorPorEstoque(produto.preco * (1 - produto.desconto / 100),produto);
    } 

    return correcaoValorPorEstoque(produto.preco,produto);
}

const produto1: Produto = { id: 1, nome: 'Camiseta Nike 2023', preco: 50, desconto: 10, categoria:'Camisas',quantidadeEmEstoque:10};
const produto2: Produto = { id: 2, nome: 'Tênis Air Force 1', preco: 150, categoria:'Tênis',quantidadeEmEstoque:3 };

console.log(calcularPrecoFinal(produto1)); 
console.log(calcularPrecoFinal(produto2));