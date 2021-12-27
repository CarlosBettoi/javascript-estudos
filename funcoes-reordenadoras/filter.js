const topBrazilMovies = [
    {title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distributedBy: 'Disney'},
    {title: 'Titanic', peopleAmount: 17_050_000, distributedBy: 'Paramount / 20 Century'},
    {title: 'O Rei Leão', peopleAmount: 16_267_649, distributedBy: 'Disney'},
    {title: 'Vingadores: Guerra Infinita', peopleAmount: 14_572_181, distributedBy: 'Disney'},
    {title: 'Tubarão', peopleAmount: 13_035_000, distributedBy: 'Universal'},
    {title: 'Nada a Perder', peopleAmount: 11_944_985, distributedBy: 'Paris Filmes'},
    {title: 'Os Dez Mandamentos', peopleAmount: 11_259_536, distributedBy: 'Paris / Downtown Filmes'},    
    {title: 'Tropa de Elite 2', peopleAmount: 11_204_815, distributedBy: 'Zazen'},
    {title: 'Os Vingadores', peopleAmount: 10_968_065, distributedBy: 'Disney'},
    {title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10_735_524, distributedBy: 'Embrafilme'},

]

// O Filter é usado se queremos, a partir de um array, obtermos outro array com só alguns itens.
// Para somar o total de pessoas que assistiram a esses filme usamos o reduce para reduzir o array a um número.

console.log(
    topBrazilMovies
        .filter(({distributedBy}) => distributedBy === 'Disney')
        .reduce((accumulator, {peopleAmount}) => accumulator + peopleAmount, 0)
      
)
