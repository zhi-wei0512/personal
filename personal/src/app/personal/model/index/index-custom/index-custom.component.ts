import { Component, OnInit } from '@angular/core';
import { Custom } from '../entity/Custom';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-index-custom',
  templateUrl: './index-custom.component.html',
  styleUrls: ['./index-custom.component.scss'],
})
export class IndexCustomComponent implements OnInit {

  graphicalLinks: Custom[];

  constructor(private service: IndexService) {}

  ngOnInit(): void {
    this.service.getCustom().subscribe((v: Custom[]) => {
      this.graphicalLinks = v;
    });
  }
}
