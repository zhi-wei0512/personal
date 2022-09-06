import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleTranslateComponent } from './personal/model/feature/google-translate/google-translate.component';
import { GoogldeSearchComponent } from './personal/model/googlde-search/googlde-search.component';
import { ComputerComponent } from './personal/model/computer/computer.component';
import { ArrayComponent } from './personal/model/feature/array/array.component';
import { CanvasComponent } from './personal/model/feature/canvas/canvas.component';
import { NgxSmartComponent } from './personal/model/ngx-smart-modal/ngx-smart-modal.component';
import { TodosComponent } from './personal/model/todo-list/components/todos/todos.component';
import { TemplateComponent } from './personal/model/template/template.component';

const routes: Routes = [
  {
    path: '', component: TemplateComponent,
    children: [
      {  path: '',loadChildren: () => import('./personal/model/index/index.module').then(m => m.IndexModule)},
      { path: 'TagCanvas', component: CanvasComponent },
      { path: 'Array', component: ArrayComponent },
      { path: 'Computer', component: ComputerComponent },
      { path: 'GoogleTranslate', component: GoogleTranslateComponent },
      { path: 'TodoList', component: TodosComponent },
    ],
  },
  { path: 'GoogleSearch', component: GoogldeSearchComponent },
  { path: 'NgxSmartMadal', component: NgxSmartComponent },
  // { path: '', loadChildren: 'src/app/backend/backend.module#BackendModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
