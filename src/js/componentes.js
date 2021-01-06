import { Todo } from "../classes";
import { todoList } from '../index';

        // * referencias
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnDelete     = document.querySelector('.clear-completed');
const ulFilters     = document.querySelector('.filters');
const anchorfiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
        <label>${ todo.task }</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}


// * Eventos

txtInput.addEventListener('keyup', (event) => {

    if(event.keyCode === 13 && txtInput.value.length > 0){
        
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo);

        crearTodoHtml( nuevoTodo);
        txtInput.value = '';

    }
})

divTodoList.addEventListener('click', (event)=> {

    const nombreElemnt = event.target.localName; // input label,button
    const todoElemnt = event.target.parentNode.parentNode;
    const todoId = todoElemnt.getAttribute('data-id');

    if(nombreElemnt.includes('input')){ // click en el check
        todoList.marcarCompletado( todoId );
        todoElemnt.classList.toggle('completed');

    }else if (nombreElemnt.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemnt);
    }

});


btnDelete.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i >=0; i--){
        const elemnt = divTodoList.children[i];

        if(elemnt.classList.contains('completed')){
            divTodoList.removeChild(elemnt)
        }

    }
});


ulFilters.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if( !filtro ){ return; }

    anchorfiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected'); 

    for( const elem of divTodoList.children ){
        
        elem.classList.remove('hidden');
        const complete = elem.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                if( complete ) {
                    elem.classList.add('hidden');
                }
                break;
            case 'Completados':
                if( !complete ){
                    elem.classList.add('hidden');
                }
                break;    
        }
    }
});

