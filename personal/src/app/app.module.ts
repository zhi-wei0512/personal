import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './personal/model/template/template.component';
import { MenuComponent } from './personal/model/menu/menu.component';
import { googleSearch} from '../app/personal/model/directive/googlesearch.directive'
import { HttpClientModule } from '@angular/common/http';
//

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    MenuComponent,
    googleSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
