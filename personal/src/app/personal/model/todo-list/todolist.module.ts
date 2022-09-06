import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoSearchComponent } from './components/todo-search/todo-search.component'; // <== add the imports!



@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    TodoSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class TodolistModule {}
