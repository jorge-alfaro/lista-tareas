import { Todo } from './todo.class';

export class TodoList {

    constructor(){
       
        // this.todos = [];
        this.loadLocalStorage();
    }

    nuevoTodo( todo) {
        this.todos.push ( todo );
        this.saveLocaStorage();
    }

    eliminarTodo( id) {
        this.todos = this.todos.filter( todo => todo.id != id);
        this.saveLocaStorage();
    }

    marcarCompletado ( id ) {
        
        for (let todo of this.todos ){

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.saveLocaStorage();
                break;
            }

        }
    }

    eliminarCompletados (){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.saveLocaStorage();
    }
    

    saveLocaStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ));
    }


    loadLocalStorage(){

        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse( localStorage.getItem('todo') );
        //     console.log('Cargar en el localStorage', this.todos);
        // } else {
        //     this.todos = [];
        // }

        this.todos = ( localStorage.getItem('todo')) 
                    ? JSON.parse( localStorage.getItem('todo') ) 
                    : [];


        this.todos = this.todos.map( Todo.fromJson )            
    }


}