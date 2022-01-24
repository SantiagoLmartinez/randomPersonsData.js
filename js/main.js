const _random = document.getElementById('random')
const _btnNext = document.getElementById('btn-next')
const _btnAdd = document.getElementById('btn-add') 
const _showDb = document.getElementById('showDb')
const _spinner = document.querySelector('.spinner-border')

let dbPerson = []

// EventListener
_btnNext.addEventListener('click', ()=>{
    _spinner.style.display = 'block';
    _random.innerHTML = "";
    fetchDataApi()
})
// _btnAdd.addEventListener('click', ()=>{

//     _showDb.innerHTML += dbPerson[0].FullName

// })


// funcion para traer datos del API

function fetchDataApi(){
    _spinner.style.display = 'block';
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then(data => createPerson(data))
        
}
// funcion para capturar datos 
class CaptureDataPerson {
    constructor(photo,FullName, age, phone, country, email) {
            this.photo = photo;
            this.FullName = FullName,
            this.age = age,
            this.phone = phone,
            this.country = country,
            this.email = email;
    }
}

// funcion para imprimir datos en DOM
function createPerson(p){
    
    _spinner.style.display = 'none';

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
    let photo = p.results[0].picture.large;
    let name = p.results[0].name.first +' '+ p.results[0].name.last;
    let age = p.results[0].dob.age;
    let phone = p.results[0].phone;
    let country = p.results[0].location.country;
    let email = p.results[0].email;

    let person = new CaptureDataPerson(photo,name,age,phone,country,email)
    addToDB(person)
    // dbPerson.push(person);
    // console.log(dbPerson)
    // console.log(person)
    console.log(p.results[0])
}

function addToDB(newData){
    dbPerson.push(newData)
    console.log('New person data db')
    console.log(dbPerson)
}

fetchDataApi();
// console.log(dbPerson)