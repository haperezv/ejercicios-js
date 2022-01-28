/**
 * Escriba un programa que reciba un número y evalúe, 
 * si el número es múltiplo de tres, imprima "Fizz" 
 * en lugar de que el número sea múltiplo de cinco, 
 * imprima "Buzz", si el número es múltiplo de tres
 *  y cinco, imprima "FizzBuzz".
 */


var numero = prompt("Ingrese su numero")


if(numero % 3 == 0 && numero % 5 == 0){
    alert("FizzBuzz")
}else if(numero % 3 == 0 ){
    alert("Fizz")
}else if(numero % 5 == 0){
    alert("Buzz")
}



/**
 * Indice de Masa Corporal
 * El índice de masa corporal (IMC), o BMI por sus siglas en inglés, 
 * es un valor que determina la cantidad de grasa de una persona.
 * El BMI se calcula con la siguiente formula: `peso / altura^2`
 * Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI
 *  e imprima la frase "Tu BMI es X".
 * Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola
 * la frase "Tu BMI es 20.061728395061728". 
 */



var peso = prompt("Ingrese su peso")
var altura = prompt("Indese su altura")
var BMI = (peso / Math.pow(altura, 2))

alert("Tu BMI es " + BMI)

if(BMI < 18.5){
    alert("Bajo de peso")
}else if(BMI >= 18.5 && BMI <= 24.9){
    alert("Normal")
}else if(BMI >= 25 && BMI <= 29.9){
    alert("Sobrepeso")
}else if(BMI > 30){
    alert("Obeso")
}


