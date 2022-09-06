import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../entity/Todo';
import { Subject,BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });

    this.query$
    .pipe(
      debounceTime(700),
      distinctUntilChanged(),
      // filter(keyword => keyword.length >= 3),
      switchMap(keyword => this.search(keyword))
    )
    .subscribe((searchTodo) => {
      console.log(searchTodo)
    });
  }

  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  // 進階搜尋
  query$ = new BehaviorSubject<string>('');

  set query(term: any) {
    this.query$.next(term);
  }
  get query(): any {
    return this.query$.getValue();
  }

  searchTodo(value: string): void {
    this.query = value
    console.log(value)
    this.query$.next(value)
  }

  search(value: any) {
    const searchTodo  = this.todos.filter((v) => v.title === value)
    return searchTodo
  }
}
