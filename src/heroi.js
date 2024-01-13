//Projeto Heroi - DIO

let nomeHeroi = "Mibzinho182"
let xpHeroi = 1000
let categoriaHeroi

switch  (true){
    case xpHeroi <= 1000:
    categoriaHeroi = "Ferro"
    break
    
    case xpHeroi >= 1001 && xpHeroi <= 2000:
    categoriaHeroi = "Bronze"
    break

    case xpHeroi >= 2001 && xpHeroi <= 5000:
    categoriaHeroi = "Prata"
    break

    case xpHeroi >= 5001 && xpHeroi <= 7000:
    categoriaHeroi = "Ouro"
    break

    case xpHeroi >= 7001 && xpHeroi <= 8000:
    categoriaHeroi = "Platina"
    break

    case xpHeroi >= 8001 && xpHeroi <= 9000:
    categoriaHeroi = "Ascendente"
    break

    case xpHeroi >= 9001 && xpHeroi <= 10000:
    categoriaHeroi = "Imortal"
    break

    case xpHeroi >= 10.001:
    categoriaHeroi = "Radiante"
    break
}

console.log("O herói de nome " + nomeHeroi + " está no nível de XP de " + xpHeroi + " que se enquadra na categoria " + categoriaHeroi)