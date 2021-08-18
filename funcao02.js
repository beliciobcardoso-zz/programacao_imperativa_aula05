//Funções Simples

// Crie uma função que converta polegadas em centímetros.
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function pol_cen(polegada) {
    let resultado = polegada * 25.4;
    return polegada + " Polegadas é igual a " + resultado + " Centímetros.";
}
console.log("Excercicio 01 ->", pol_cen(10));

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function url(nome) {
    let url = "https://www." + nome + ".com";
    return url;
}
console.log("Excercicio 02 ->", url("google"));

// Crie uma função que recebe uma string e retorna a mesma frase, 
//mas com o caracter de exclamação ( ! ).

function completWord(nome) {
    let resultado = nome + "!";
    return resultado;
}
console.log("Excercicio 03 ->", completWord("Ola Mundo"));

// Crie uma função que calcule a idade dos cachorros, 
//considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCao(calc) {
    let resultado = calc * 7;
    return "Hoje Cão tem " + calc + " anos de vida humana, Então a idade dele é " + resultado;
}
console.log("Excercicio 04 ->", idadeCao(2));

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function timeWork(salario) {
    let resultado = salario / 160;
    return resultado;
}
console.log("Excercicio 05 ->", "O valor da minha hora de trabalho é", timeWork(1800));


//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas.
//Em seguida, execute a função, testando diferentes valores. 

function imc(altura, peso) {
    let resultado = peso / (altura * altura);
    return Math.floor(resultado)
}
console.log("Excercicio 06 ->", "Seu IMC é", imc(1.8, 80));

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function upperCase(nome) {
    let resultado = nome.toUpperCase();
    return resultado;
}
console.log("Excercicio 07-01 ->", upperCase("FuncaoJs"));

function lowerCase(nome) {
    let resultado = nome.toLowerCase();
    return resultado;
}
console.log("Excercicio 07-02  ->", lowerCase("FuncaoJs"));

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipo(nome) {
    let resultado = typeof (nome);
    return "Esta variavel é " + resultado;
}
console.log("Excercicio 08 ->", tipo(12.12));

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function circunferencia(raio) {
    let resultado = Math.PI * raio;
    return resultado;
}
console.log("Excercicio 09 ->", circunferencia(1));
