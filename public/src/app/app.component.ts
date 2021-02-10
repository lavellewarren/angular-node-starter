import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todos';

@Component({
  selector: 'my-app',
  template:
    `<h1>Hello {{name}}</h1>
        <ul>
          <li *ngFor="let todo of todos">
            {{todo.todo}} - {{todo.isDone}}
          </li>
        </ul>`,
  providers: [ TodoService ]
})
export class AppComponent {
  name = 'Angular';
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
