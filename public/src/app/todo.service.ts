import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Todo } from './todos';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private todosUrl = '/api/todos/admin';

  constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.todosUrl)
      .toPromise().then(response => response.json() as Todo[]);
  }
}
