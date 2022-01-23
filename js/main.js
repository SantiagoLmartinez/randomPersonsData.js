const _random = document.getElementById('random')

// funcion para traer datos del API

function fetchDataApi(){
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then(data => createPerson(data))
}

function createPerson(p){
    // const card = document.createElement('div')
    // card.classList.add('card-body')
_random.innerHTML +=
    `
    <div class="d-flex flex-row justify-content-center ">
    <div class=" mx-3 ">
    <img src="${p.results[0].picture.large}" class="card-img-top rounded-circle" width="500px" alt="...">
    </div>
    
    <div >
        <p class="card-text mb-1">Full Name: ${p.results[0].name.first} ${p.results[0].name.last}</p>
        <p class="card-text mb-1">Age: ${p.results[0].dob.age}</p>
        <p class="card-text mb-1">Phone: ${p.results[0].phone}</p>
        <p class="card-text mb-1">Country: ${p.results[0].location.country}</p>
        <p class="card-text mb-1">Email: ${p.results[0].email}</p>
    </div>
    </div>
    `
    

    // _random.innerHTML += `<p>Name: ${p.results[0].name.first}</p>`
    // _random.innerHTML += `<p>Phone: ${p.results[0].phone}</p>`
    // _random.innerHTML += `<p>Email: ${p.results[0].email}</p>`
    // _random.innerHTML += `<img src="${p.results[0].picture.large}" alt="123">`

    console.log(p.results[0])
}

fetchDataApi();