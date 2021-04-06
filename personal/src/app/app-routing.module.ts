import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexSearchComponent } from '../app/personal/model/index/index-search/index-search.component'
import { GoogleTranslateComponent} from './personal/model/google-translate/google-translate.component'
import { GoogldeSearchComponent} from './personal/model/googlde-search/googlde-search.component'
import { TableDataComponent} from './personal/model/table-data/table-data.component'
import { ComputerComponent} from './personal/model/computer/computer.component'
const routes: Routes = [
  { path: 'search', component: IndexSearchComponent},
  { path: 'GoogleTranslate', component: GoogleTranslateComponent },
  { path: 'GoogleSearch', component: GoogldeSearchComponent },
  { path: 'dataTable', component: TableDataComponent},
  { path: 'Computer', component: ComputerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
