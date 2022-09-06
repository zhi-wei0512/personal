import { Component, OnInit } from '@angular/core';
import { Banner } from '../entity/banner';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-index-banner-01',
  templateUrl: './index-banner.component.html',
  styleUrls: ['./index-banner.component.scss'],
})
export class IndexBanner01Component implements OnInit {
  /** 顯示資料 */
  newBanner: Banner;

  constructor(private service: IndexService) {}

  ngOnInit(): void {
    this.service.getBanner().subscribe((v: Banner) => {
      this.newBanner = v;
    });
  }
}
