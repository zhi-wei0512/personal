import { IndexPortfolioComponent } from './index-portfolio/index-portfolio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexBanner01Component } from './index-banner/index-banner.component';
import { IndexCustomComponent } from './index-custom/index-custom.component';
import { IndexArticleComponent } from './index-article/index-article.component';
import { IndexService } from './index.service';
import { IndexAllComponent } from './index-all/index-all.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [
    IndexPortfolioComponent,
    IndexBanner01Component,
    IndexCustomComponent,
    IndexArticleComponent,
    IndexAllComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports: [
    IndexPortfolioComponent,
    IndexBanner01Component,
    IndexCustomComponent,
    IndexArticleComponent,
  ],
  providers: [IndexService],
})
export class IndexModule {}
