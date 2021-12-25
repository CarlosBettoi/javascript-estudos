/* Quarta variação: dois ou mais parâmetros.
   Segue o modelo padrão:
   const sum = (number1, number2) => {
       return number1 + number2
   } 
   Nessa hipóste, podemos retirar o return e as chaves,porém não podemos retirar os parênteses:
*/ 

const sum = (number1, number2, number3) => number1 + number2 + number3;
 
console.log(sum(20,2,10))

