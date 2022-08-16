/* Este script realiza uma utilização de template strings com o uso de template literals
que consiste em mostrar o valor de uma expressão ou variável dentro da string. */

let nome = "Erick"
let idade = 19
let nameMae = "Yaponira"
let idadeMae = 46

console.log(`Eu, ${nome}, sou filho de ${nameMae}`)
// CONSOLE: Eu, Erick, sou filho de Yaponira
console.log(`Eu e minha mãe, somadas as nossas idades, temos juntos ${idade + idadeMae} anos.`)
// CONSOLE: Eu e minha mãe, somadas as nossas idades, temos juntos 65 anos.