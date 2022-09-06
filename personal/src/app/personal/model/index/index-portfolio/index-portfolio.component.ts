import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IndexService } from '../index.service';
import { Portfolio } from '../entity/portfolio';

@Component({
  selector: 'app-index-portfolio',
  templateUrl: './index-portfolio.component.html',
  styleUrls: ['./index-portfolio.component.scss'],
})

export class IndexPortfolioComponent implements OnInit {

  /** 顯示資料 */
  remoteData$: Observable<Portfolio[]>;

  constructor(private service: IndexService) {
    this.remoteData$ = this.service.getPortfolio();
  }

  ngOnInit(): void {}
}
