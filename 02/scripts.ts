type Item = {
    nome: string;
    descricao: string;
    valor: number;
};

type Cartao = {
    numero: number;
    validade: string;
    nome: string;
    cvv: number;
};

type Carrinho = {
    item: Item;
    qtd: number;
    desconto: number;
    frete: number;
    tipoTransacao: 'credito' | 'Debito';
    cartao: Cartao;
};


type Endereco = {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
    cep: string;
};

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    tipoTransacao: Lowercase<Carrinho['tipoTransacao']>;
    endereco: Endereco;
};