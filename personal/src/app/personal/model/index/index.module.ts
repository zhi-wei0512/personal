import { IndexPortfolio02Component } from './index-portfolio/index-portfolio02/index-portfolio02.component';
import { IndexPortfolio01Component } from './index-portfolio/index-portfolio01/index-portfolio01.component';
import { IndexVideoComponent } from './index-video/index-video.component';
import { IndexCarouselComponent } from './index-carousel/index-carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexSearchComponent } from './index-search/index-search.component';
import { TestindexComponent } from './testindex/testindex.component';



@NgModule({
  declarations: [
 ],
  imports: [
    CommonModule,
  ],
  exports: [
    IndexCarouselComponent,
    IndexVideoComponent,
    IndexPortfolio01Component,
    IndexPortfolio02Component,
    IndexSearchComponent,
  ]
})
export class IndexModule { }
