import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexSearchComponent} from '../app/personal/model/index/index-search/index-search.component'
const routes: Routes = [
  {
    path: 'search',component: IndexSearchComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
