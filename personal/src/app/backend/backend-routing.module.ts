import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend.component';

const routes: Routes = [
  {
    path: '', component: BackendComponent, children: [
      {path: 'user/juniorStudent', loadChildren: 'src/app/backend/page-modules/user/user-junior-student/user-junior-student.module#UserJuniorStudentModule'},
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BackendRoutingModule { }
