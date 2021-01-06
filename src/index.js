import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


   export const todoList = new TodoList();
  //  const task = new Todo('Aprender React!!!');
  //    todoList.nuevoTodo( task );

  //   console.log(todoList);

  //   crearTodoHtml( task );
  //   todoList.marcarCompletado( task );
    

  //   localStorage.setItem('Jorge','Alfaro');

  todoList.todos.forEach( crearTodoHtml );
  

  // const num = todoList.todos.length;
  // console.log(num);