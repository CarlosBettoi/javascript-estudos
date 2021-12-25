/* Sexta variação : Retornando um JSON sem return.
Para isso, devemos trocar as chaves da função por parênteses 

O código com o return é assim:
const getperson = () => {
    return {name: 'Henri'}
}
console.log(getperson());

Sem os parênteses fica desta forma:
*/
const getperson = () => (
    {name: 'Henri', eye: 'blue'}
)
console.log(getperson());



