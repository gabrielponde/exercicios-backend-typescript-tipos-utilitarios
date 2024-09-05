type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    rg: string;
    dataNascimento?: string;
};

type UsuarioSemRGObrigatorio = Required<Omit<Usuario, 'rg'>>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
};

const cadastrarUsuarioSemRG = (info: UsuarioSemRGObrigatorio): UsuarioSemRGObrigatorio => {
    return info;
};