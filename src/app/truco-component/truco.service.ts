import { Injectable } from "@angular/core";
import { Card } from "../domain/Card";

@Injectable({
    providedIn: 'root'
})

export class GameService {
    chooseBotCard(botCards: Card[], empaxou: boolean, botPtRodada: number[], manilha: Card) {
        const cartaManilha = botCards.find(card => card.numero === manilha.numero);
        if (cartaManilha)
            return cartaManilha;
        else
            return botCards.reduce((max, card) => card.numero > max.numero ? card : max);
    }

    chooseBotCardWithUserCard(botCards: Card[], userCard: Card, empaxou: boolean, botPtRodada: number[], manilha: Card) {
        //corrigir para verificar se eu tenho manilha
        if (userCard.numero === manilha.numero) {
            const minhaManilha = botCards.filter(card => card.naipe === manilha.naipe && card.numero > manilha.numero);
            if (minhaManilha.length > 0) {
                return minhaManilha.reduce((min, card) => card.numero < min.numero ? card : min);
            }
        }
        const cartaMesmoNumero = botCards.filter(card => card.numero === userCard.numero || card.numero > userCard.numero);
        if (cartaMesmoNumero.length > 0) {
            //carta mais baixa que ganha
            const cartaMaisBaixaGanhadora = cartaMesmoNumero.reduce((min, card) => card.numero < min.numero && card.numero > userCard.numero ? card : min);
            if (cartaMaisBaixaGanhadora) {
                return cartaMaisBaixaGanhadora;
            }
        }
        //carta mais baixa
        //corrigir isso aqui
        var numeros = [4, 5, 6, 7, 10, 11, 12, 1, 2, 3];
        return botCards.reduce((max, card) => numeros.indexOf(card.numero) > numeros.indexOf(max.numero) ? card : max);
    }
}