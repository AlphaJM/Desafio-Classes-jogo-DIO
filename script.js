class personagem{
    
    escreva(tipo, ataque){
        console.log(`O ${tipo} atacou usando o ${ataque}!`)}
}
let tipoPersonagem = "cachorro"

if(tipoPersonagem === "mago"){
    let personagem1 = new personagem("ninja", "Usou Mágia!")
    personagem1.escreva("ninja", "Usou Mágia!")
} 
else if(tipoPersonagem === "guerreiro"){
    let personagem1 = new personagem("guerreiro", "Usou Espada!")
    personagem1.escreva("guerreiro", "Usou Espada!")
} 
else if(tipoPersonagem === "monge"){
    let personagem1 = new personagem("monge", "Usou Artes Marciais!")
    personagem1.escreva("monge", "Usou Artes Marciais!")
} 
else if(tipoPersonagem === "ninja"){
    let personagem1 = new personagem("ninja", "Usou Shuriken!")
    personagem1.escreva("ninja", "Usou Shuriken!")
} 
else{
    console.log("Personagem não foi escolhido corretamente!")
}