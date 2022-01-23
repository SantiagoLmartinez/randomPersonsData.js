const _random = document.getElementById('random')
const _btn = document.getElementById('btn')

_btn.addEventListener('click', ()=>{
    _random.innerHTML = "";
    fetchDataApi()
})
// funcion para traer datos del API

function fetchDataApi(){
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then(data => createPerson(data))
}
// funcion para imprimir datos en DOM
function createPerson(p){
    // const card = document.createElement('div')
    // card.classList.add('card-body')
_random.innerHTML +=
    `
    <div id="person-Data-Container" class="d-flex flex-row justify-content-center">
    <div class=" my-3 mx-3 ">
    <img src="${p.results[0].picture.large}" class="card-img-top rounded-circle" width="500px" alt="...">
    </div>
    
    <div >
        <p class="card-text mb-1"><span>FullName:</span>  ${p.results[0].name.first} ${p.results[0].name.last}</p>
        <p class="card-text mb-1"><span>Age:</span> ${p.results[0].dob.age}</p>
        <p class="card-text mb-1"><span>Phone:</span> ${p.results[0].phone}</p>
        <p class="card-text mb-1"><span>Country:</span> ${p.results[0].location.country}</p>
        <p class="card-text mb-1"><span>Email:</span> ${p.results[0].email}</p>
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