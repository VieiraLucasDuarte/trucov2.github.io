export interface Card {
    numero: number,
    naipe: Naipe | string,
    showing: boolean,
    jogador: string
}

export enum Naipe {
    PAUS = "Paus",
    COPAS = "Copas",
    ESPADAS = "Espadas",
    OUROS = "Ouros"
}