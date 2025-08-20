let numero;
numero = parseInt(prompt("Entre com um número inteiro: "));
if (numero < 0) {
    alert("O número lido é negativo.")
} else if (numero > 0) {
    alert("O número lido é positivo.");
} else {
console.log("O número lido é nulo.");
}