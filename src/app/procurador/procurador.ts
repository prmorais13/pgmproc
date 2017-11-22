export class Procurador {
    id: number;
    nome: string;
    procuradoria: string;
    email: string;
    celular: string;
    dataCriacao: Date;

    constructor(id: number, nome: string, procuradoria: string,
        email: string, celular: string, dataCriacao: Date) {
        this.id = id;
        this.nome = nome;
        this.procuradoria = procuradoria;
        this.email = email;
        this.celular = celular;
        this.dataCriacao = dataCriacao;
    }
}
