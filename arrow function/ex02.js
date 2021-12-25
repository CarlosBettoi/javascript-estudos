/* Primeira variação da arrow function:
Sem return, mas retorna. 
    O modelo padrão é: 
 
    const sum = (number1, number2) => {
          return number1 + number2;
    }
    console.log(sum(4,2));

  Agora, vamos retirar o return e as chaves*/


const sum = (number1, number2) => number1 + number2;

console.log(sum(2,2));