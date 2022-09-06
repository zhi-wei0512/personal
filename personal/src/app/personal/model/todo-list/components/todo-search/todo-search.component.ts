import { Todo } from './../../entity/Todo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss'],
})
export class TodoSearchComponent implements OnInit {
  @Output() searchTodo: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSearch(value: string): void {
    if (value.length > 0) {
      this.searchTodo.emit(value);
    }
  }
}
