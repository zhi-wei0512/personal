import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './personal/model/template/template.component';
import { MenuComponent } from './personal/model/menu/menu.component';
import { googleSearch } from '../app/personal/model/directive/googlesearch.directive';
import { HttpClientModule } from '@angular/common/http';
import { GoogleTranslateComponent } from './personal/model/google-translate/google-translate.component';
import { GoogldeSearchComponent } from './personal/model/googlde-search/googlde-search.component';
import { TmWowDirective } from '../app/personal/model/directive/wow.directive';
import { WowComponent } from './personal/model/wow/wow.component';
import { TableDataComponent } from './personal/model/table-data/table-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { TemplateComponent01 } from './personal/module/component/template/template.component';
import { ComputerComponent } from './personal/model/computer/computer.component';
import { SelectOptionComponent } from './personal/model/select-option/select-option.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ArrayComponent } from './personal/model/array/array.component';
import { FlopGameComponent } from './personal/model/flop-game/flop-game.component';
import { CanvasComponent } from './personal/model/canvas/canvas.component';

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
    SelectOptionComponent,
    ArrayComponent,
    FlopGameComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <========== Add this line!
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    BsDatepickerModule.forRoot(),
//primeng
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
