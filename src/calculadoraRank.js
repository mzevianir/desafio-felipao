//Projeto Calculadora de partidas rankeadas - DIO

function rankHeroi (qntVitoria, qntDerrota){

    saldoDeVitorias = qntVitoria - qntDerrota

    switch(true){
        case saldoDeVitorias <= 10:
        rank = "Ferro"
        break

        case saldoDeVitorias >= 11 && saldoDeVitorias <= 20:
        rank = "Bronze"
        break

        case saldoDeVitorias >= 21 && saldoDeVitorias <= 50:
        rank = "Prata"
        break

        case saldoDeVitorias >= 51 && saldoDeVitorias <= 80:
        rank = "Ouro"
        break

        case saldoDeVitorias >= 81 && saldoDeVitorias <= 90:
        rank = "Diamante"
        break

        case saldoDeVitorias >= 91 && saldoDeVitorias <= 100:
        rank = "Lendário"
        break

        case saldoDeVitorias >= 101:
        rank = "Imortal"
        break
    }
}

rankHeroi(101, 50)

console.log(`O herói tem saldo total de ${saldoDeVitorias} e está no rank de ${rank}`)
