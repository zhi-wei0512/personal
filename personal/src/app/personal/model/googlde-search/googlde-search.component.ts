import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router'; // CLI imports router
import { HttpClient } from '@angular/common/http';
// import { GoogleSearch } from '../../model/template/googleSearch';
import * as $ from 'jquery';

@Component({
  selector: 'app-googlde-search',
  templateUrl: './googlde-search.component.html',
  styleUrls: ['./googlde-search.component.scss'],
})
export class GoogldeSearchComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  name;
  // AllValue = new GoogleSearch();

  datas: any[] = [];
  arr = [
    { lable: '古蹟', value: '1.1' },
    { lable: '古物', value: '1.2' },
    { lable: '遺跡', value: '1.3' },
    { lable: '寶物', value: '1.4' },
    { lable: '財寶', value: '1.5' },
    { lable: '大祕寶', value: '1.6' },
  ];
  Data = {
    test1: '欄位1',
    test2: '欄位2',
    test3: '欄位3',
    test4: '欄位4',
    arrtest: ['陣列1', '陣列2'],
    test5: '欄位5',
    test6: '欄位6',
    test7: '欄位7',
  };
  ngOnInit(): void {
    $(function () {
      $('.List-item').click(function (e) {
        e.stopPropagation();
        $(this).children('ul').toggle();
      });
    });

    $(function () {
      $('.lvOne').click(function (e) {
        e.stopPropagation();
        $(this).children('ul').toggle();
      });
    });

    $(function () {
      $('.lvtwo').click(function (e) {
        e.stopPropagation();
        $(this).children('ul').toggle();
      });
    });





    // this.route.queryParams.subscribe((params) => {
    //   this.name = JSON.parse(params.search);
    //   this.arr.forEach((val) => {
    //     if (val.value == this.name.Input1) {
    //       console.log(val.lable);
    //       console.log(this.name.Input1);
    //       this.datas.push(val);
    //     }
    //     if (val.value == this.name.Input2) {
    //       console.log(val.lable);
    //       console.log(this.name.Input2);
    //       this.datas.push(val);
    //     }
    //   });
    // });
  }

  test(index) {
    console.log(index);
    console.log(this.datas);
  }

  getSearch(query) {
    return this.http.get(
      `http://localhost:8080/api/search?moduleKey=OBJECT_DB&limit=10&query=%7B${query}%7D`
    );
  }
}
