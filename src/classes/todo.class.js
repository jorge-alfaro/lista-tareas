export class Todo {


    static fromJson ( { task, id, completado, creado } ) {

        const tempTodo = new Todo( task );

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }


    constructor( task) {
        this.task = task;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
    
}