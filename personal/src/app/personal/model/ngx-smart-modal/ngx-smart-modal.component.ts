import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-ngx-smart-modal',
  templateUrl: './ngx-smart-modal.component.html',
  styleUrls: ['./ngx-smart-modal.component.scss'],
})
export class NgxSmartComponent implements OnInit, AfterViewInit {
  constructor(public ngxSmartModalService: NgxSmartModalService) {
    console.log(123)
  }

  ngOnInit(): void {}

  public log(msg: string) {
    console.log(msg);
  }

  ngAfterViewInit() {
    const obj: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [
        { a: 'a', b: 'b' },
        { c: 'c', d: 'd' },
      ],
      prop4: 327652175423,
    };

    this.ngxSmartModalService.setModalData(obj, 'myModal');
  }
}
