import { Component } from '@angular/core';
import { TodoService } from 'todo.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TodoService]
})

export class AppComponent {
    constructor(private todoService: TodoService){
        
    }
    
    toggleTodoComplete(todo){
        this.todoService.toggleTodoComplete(todo)
    }
}
