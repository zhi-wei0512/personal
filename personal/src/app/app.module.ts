import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './personal/model/template/template.component';
import { MenuComponent } from './personal/model/menu/menu.component';
import { googleSearch } from '../app/personal/model/directive/googlesearch.directive';
import { GoogleTranslateComponent } from './personal/model/feature/google-translate/google-translate.component';
import { GoogldeSearchComponent } from './personal/model/googlde-search/googlde-search.component';
import { TmWowDirective } from '../app/personal/model/directive/wow.directive';
import { WowComponent } from './personal/model/wow/wow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//

import { ComputerComponent } from './personal/model/computer/computer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ArrayComponent } from './personal/model/feature/array/array.component';
import { CanvasComponent } from './personal/model/feature/canvas/canvas.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { NgxSmartComponent } from './personal/model/ngx-smart-modal/ngx-smart-modal.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TodolistModule } from './personal/model/todo-list/todolist.module';
import { IndexModule } from './personal/model/index/index.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthorizationTokenService } from './shared/authorization-token.service.ts'

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    MenuComponent,
    googleSearch,
    GoogleTranslateComponent,
    GoogldeSearchComponent,
    TmWowDirective,
    WowComponent,

    ComputerComponent,
    ArrayComponent,
    CanvasComponent,
    NgxSmartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <========== Add this line!
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    HighlightJsModule,
    TodolistModule,
    IndexModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthorizationTokenService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
