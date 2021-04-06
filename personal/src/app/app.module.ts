import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './personal/model/template/template.component';
import { MenuComponent } from './personal/model/menu/menu.component';
import { googleSearch} from '../app/personal/model/directive/googlesearch.directive'
import { HttpClientModule } from '@angular/common/http';
import { GoogleTranslateComponent } from './personal/model/google-translate/google-translate.component';
import { GoogldeSearchComponent } from './personal/model/googlde-search/googlde-search.component';
import { TmWowDirective} from '../app/personal/model/directive/wow.directive';
import { WowComponent } from './personal/model/wow/wow.component';
import { TableDataComponent } from './personal/model/table-data/table-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
//
import {TemplateComponent01} from './personal/module/component/template/template.component';
import { ComputerComponent } from './personal/model/computer/computer.component';
import { SelectOptionComponent } from './personal/model/select-option/select-option.component'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
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
    TableDataComponent,
    TemplateComponent01,
    ComputerComponent,
    SelectOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
