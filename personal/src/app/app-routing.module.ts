import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexSearchComponent } from '../app/personal/model/index/index-search/index-search.component';
import { GoogleTranslateComponent } from './personal/model/google-translate/google-translate.component';
import { GoogldeSearchComponent } from './personal/model/googlde-search/googlde-search.component';
import { TableDataComponent } from './personal/model/table-data/table-data.component';
import { ComputerComponent } from './personal/model/computer/computer.component';
import { ArrayComponent } from './personal/model/array/array.component';
import { FlopGameComponent } from './personal/model/flop-game/flop-game.component';
import { CanvasComponent } from './personal/model/canvas/canvas.component';

const routes: Routes = [
  { path: 'search', component: IndexSearchComponent },
  { path: 'GoogleTranslate', component: GoogleTranslateComponent },
  { path: 'GoogleSearch', component: GoogldeSearchComponent },
  { path: 'dataTable', component: TableDataComponent },
  { path: 'Computer', component: ComputerComponent },
  { path: 'Array', component: ArrayComponent },
  { path: 'FlopGame', component: FlopGameComponent },
  { path: 'TagCanvas', component: CanvasComponent },
  { path: '', loadChildren: 'src/app/backend/backend.module#BackendModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
