export interface Promotion {
    id: number;
    destino: string;
    imagem: string;
    preco: number;
}

export interface FederativeUnity {
    id: number;
    nome: string;
    sigla: string;
}

export interface Testimonial {
    id: number;
    texto: string;
    autor: string;
    avatar: string;
}

export interface UserPerson {
    nome: string;
    nascimento: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    cidade: string;
    estado: FederativeUnity;
    genero: string;
}