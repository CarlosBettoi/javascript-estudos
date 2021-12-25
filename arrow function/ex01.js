
/* A estrutura básica da arrow function é a seguinte:  

const sum = () => {}

Obs: não é possível atribuir um nome a arrow function, a não ser a uma variável.
   Utilizando a arrow function, a o programa ficará da seguinte forma*/

/* Segue exemplo sem a arrow function */

/*function sum(number1, number2) {
     return number1 + number2
  }
  console.log(sum(2,2));
  
(Essa função apresentará a soma de 2 + 2) 

Aplicando a arrow function ficará da seguinte forma:
*/

const sum = (number1, number2) => {
    return number1 + number2;
}


console.log(sum(4,2));
// Como resultado será feita a soma de  4 +2 = 6

