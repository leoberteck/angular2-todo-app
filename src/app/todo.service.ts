import { Injectable } from '@angular/core'
import { Todo } from './todo'

@Injectable()
export class TodoService {

    //Placeholder for last id so we can simulate
    //automatic incrementing of ids
    lastId : number = 0;
    todos : Todo[] = [];

    constructor() { }
    
    addTodo(todo: Todo) : TodoService{
        if(!todo.id){
            todo.id = ++this.lastId
        }
        this.todos.push(todo)
        return this
    }

    //Simulate DELETE /todos/:id
    deleteTodoById(id : number): TodoService{
        this.todos = this.todos
            .filter(t => t.id !== id)
        return this
    }

    updateTodoById(id : number, values: Object = {}) : Todo{
        let todo = this.getTodoById(id)
        if(!todo){
            return null
        }
        Object.assign(todo, values)
        return todo
    }

    getAllTodos(): Todo[]{
        return this.todos
    }

    //Simulate GET /todos/:id
    getTodoById(id : number) : Todo{
        return this.todos
            .filter(t => t.id === id)
            .pop()
    }

    //Toggle todo complete
    toggleTodoComplete(todo: Todo){
        let updateTodo = this.updateTodoById(todo.id, {
            complete : !todo.complete
        })
        return updateTodo
    }
}
