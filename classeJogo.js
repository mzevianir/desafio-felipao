//Criado a classe heroi para definir as informações básicas
class heroi {
    constructor(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
//Criado a função atacar com switch para definir o ataque de acordo com a classe
    atacar(){
        //OBS: CRIAR VÁRIAVEL DO TIPO DE ATAQUE, SE NÃO, NÃO FUNCIONA CABEÇÃO
        let tipoAtaque

        //Comparação da classe escolhida para determinar o tipo de ataque
        switch (this.classe) {
            case "guerreiro":
            return tipoAtaque = "espada"

            case "mago":
            return tipoAtaque = "magia"

            case "monge":
            return tipoAtaque = "artes marciais"
           

            case "ninja":
            return tipoAtaque = "shuriken"
        }
    }
}

personagem1 = new heroi ("Mateus", 24, "guerreiro")
personagem2 = new heroi ("Mateus", 24, "mago")
personagem3 = new heroi ("Mateus", 24, "monge")
personagem4 = new heroi ("Mateus", 24, "ninja")

console.log(`O ${personagem1.classe} atacou usando ${personagem1.atacar()}`)
console.log(`O ${personagem2.classe} atacou usando ${personagem2.atacar()}`)
console.log(`O ${personagem3.classe} atacou usando ${personagem3.atacar()}`)
console.log(`O ${personagem4.classe} atacou usando ${personagem4.atacar()}`)

