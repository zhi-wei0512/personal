import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexAllComponent }from './index-all/index-all.component';

const routes: Routes = [
  {
    path: '', component: IndexAllComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
