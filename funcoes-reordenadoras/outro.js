const pets = [
    {name: 'Boris', age: 4, gender: 'Male', type: 'Dog'}, 
    {name: 'Jimy', age: 1, gender: 'Male', type: 'Cat'}, 
    {name: 'Pérola', age: 2, gender: 'Female', type: 'Dog'},
    {name: 'Lucy', age: 5, gender: 'Female', type: 'Cat'},
    {name: 'Cristal', age: 3, gender: 'Female', type: 'Dog'}, 
    {name: 'Chico', age: 6, gender: 'Male', type: 'Dog'}, 
]

// Filter pode ser usado se quisermos obter um novo array com só alguns itens do array original
// Mas desta vez vamos desacoplar a função que o filter vai receber e criá-la separada.
// Na nova array, se quisermos fazer uma conversão na idade de cada cão, ou seja, vamos obter um novo array com o mesmo tamanho e quantidade de itens do array original, só que com cada item transformado, então podemos utilizar o MAP.

const getDogs = ({type}) => type === 'Dog'
const convertToHumanAge = ({name, age}) => ({
    name, /* Aqui não precisamos especificar name: name porque tem o mesmo nome*/ 
        convertedAge: age * 7
})

console.log(pets
    .filter(getDogs)
    .map(convertToHumanAge) 
)