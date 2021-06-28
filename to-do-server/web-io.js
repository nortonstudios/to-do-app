
// Consts
const url = 'localhost:8000';

// Page elements
//const inputTitle = document.querySelector('')
const submitButton = document.querySelector('#submit');
const removeButton = document.querySelector("#remove");

// AJAX CRUD functions
// POST
const postTask = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send();
}

// Delete
const deleteTask = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.send();

}

// Events
submitButton.addEventListener('click', postTask);
removeButton.addEventListener('click', deleteTask);