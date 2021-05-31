import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
// import { HeaderComponent } from './view-frame/header/header.component';
import { BackendMenuComponent } from './view-frame/backend-menu/backend-menu.component';
// import { FooterComponent } from './view-frame/footer/footer.component';
// import { SecurityModule } from '../security/security.module';

@NgModule({
  declarations: [
    BackendComponent,
    BackendMenuComponent,
  ],
  imports: [
    CommonModule,
    BackendRoutingModule,
    // SecurityModule.forRoot(),
  ],
  providers: [
  ]
})
export class BackendModule { }
