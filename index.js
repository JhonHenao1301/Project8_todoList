
var edit = document.getElementById('edit_btn'); 
var delet = document.getElementById('delete_btn');
var task = document.getElementById('task_item');
var clean = document.getElementById('btn_clear')

const input = document.querySelector('.input');
const addBtn = document.querySelector('.btn');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

var contador = 0;

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = input.value;

    if(text != ''){
        
        contador++;
        localStorage.setItem(contador, text);
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = localStorage.getItem(contador);

        ul.appendChild(li);
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        
        li.className = "list-group-item"

        input.value = '';
        empty.style.display = "none";
    }
        else { alert('Se debe agregar una tarea') } 
        
})

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn btn-danger";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement; //item = li
        ul.removeChild(item);

        const items = document.querySelectorAll('li');
        if(items.length === 0){
            empty.style.display = 'block';
        }
    });

    return deleteBtn;
}

clean.addEventListener('click', (e)=> {
    e.preventDefault();
    localStorage.clear();   
})





