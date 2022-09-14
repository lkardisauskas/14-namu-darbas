let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = document.querySelector('#name');
let lastnameInput = document.querySelector('#lastname');
let ageInput = document.querySelector('#age');

btnAdd.addEventListener('click', () => {

    if (document.getElementById("name").value == "") {
        alert("Iveskite varda");
        return false;
    }

    if (document.getElementById("lastname").value == "") {
        alert("Iveskite pavarde");
        return false;
    }

    if (document.getElementById("age").value == "") {
        alert("Iveskite amziu");
        return false;
    }



    let name = nameInput.value;
    let lastname = lastnameInput.value;
    let age = ageInput.value;

    let template = 
    `
    <tr>
    <td>${name}</td>
    <td>${lastname}</td>
    <td>${age}</td>
    </tr>
    `;

    table.innerHTML += template;

    nameInput.value = '';
    lastnameInput.value = '';
    ageInput.value = '';

});

