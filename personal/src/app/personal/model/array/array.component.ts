import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit {
  constructor() {}
  //要取的名稱
  arr1 = [
    { lable: '古蹟', value: '1.1' },
    { lable: '古物', value: '1.2' },
    { lable: '遺跡', value: '1.3' },
    { lable: '寶物', value: '1.4' },
    { lable: '財寶', value: '1.5' },
    { lable: '大祕寶', value: '1.6' },
    { lable: '小祕寶', value: '1.7' },
  ];
  arr2 = [
    { lable: '海賊王', value: 'G6' },
    { lable: '魯夫', value: 'G7' },
  ];
  arr3 = [
    { lable: '紅毛城', value: '1.1.1' },
    { lable: '安平古堡', value: '1.2.1' },
  ];
  // 查詢的條件
  Data = {
    test1: '1.1',
    test2: 'G6',
    arrtest: ['1.1.1', '1.2.1'],
  };
  //要顯示的物件
  showData: any;

  source = of(this.Data);

  ngOnInit(): void {
    this.getshowData();
  }

  getshowData() {
    this.showData = this.Data;

    if (this.showData.test1) {
      this.arr1.forEach((val) => {
        if (val.value == this.showData.test1) {
          this.showData.test1 = val.lable;
        }
      });
    }
    if (this.showData.test2) {
      this.arr2.forEach((val) => {
        if (val.value == this.showData.test2) {
          this.showData.test2 = val.lable;
        }
      });
    }
    console.log(this.showData);
  }
}
