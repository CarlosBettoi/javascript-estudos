const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        //console.log(data)
        return data.map(function (dado) {
            let li = document.createElement('li');
            li.innerHTML = `${dado.name}  (${dado.username}) ${dado.city} ${dado.email} `
            ul.appendChild(li)
        })

    })
    .catch ((error) => {
        console.log('Oops!' + error)

    })

