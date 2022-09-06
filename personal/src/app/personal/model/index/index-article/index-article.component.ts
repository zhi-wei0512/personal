import { Component, OnInit } from '@angular/core';
import { Article } from '../entity/article';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-index-article',
  templateUrl: './index-article.component.html',
  styleUrls: ['./index-article.component.scss'],
})
export class IndexArticleComponent implements OnInit {
  /** 顯示資料 */
  remoteData: Article[];

  constructor(private service: IndexService) {}

  ngOnInit(): void {
    this.service.getArticle().subscribe((v:Article[]) => {
      this.remoteData = v;
    });
  }
}
