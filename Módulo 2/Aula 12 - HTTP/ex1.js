let nome = 'José'

function saudacao1() {
    return "oi, "+ nome
}

function saudacao2() {
    return "olá, "+ nome
}

//console.log("Paulista, 19 de março")
//console.log(saudacao("Maria"))

function introducao(f){
    let frase = f()
    return frase
}

console.log("Paulista")
let texto = introducao(saudacao1)
console.log(texto)
texto = introducao(saudacao2)
console.log(texto)