export class Procurador {
    id: number;
    nome: string;
    procuradoria: string;
    email: string;
    celular: string;

    constructor(id: number, nome: string, procuradoria: string,
        email: string, celular: string) {
        this.id = id;
        this.nome = nome;
        this.procuradoria = procuradoria;
        this.email = email;
        this.celular = celular;
    }
}
